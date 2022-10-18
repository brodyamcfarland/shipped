import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissionsFirebase.json");

// Connecting Firebase to Backend
const app = !admin.apps.length
    ? admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
      })
    : admin.app();

// Connecting to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session: any) => {
    console.log("Fulfilling Order", session);
    return app
        .firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log(`SUCCESS: Order ${session.id} has been added to DB`);
        });
};

export default async (req: any, res: any) => {
    if (req.method === "POST") {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];
        let event;
        // Verify EVENT Came from Stripe
        try {
            event = stripe.webhooks.constructEvent(
                payload,
                sig,
                endpointSecret
            );
        } catch (error: any) {
            return res.status(400).send(`Webhook Error: ${error.message}`);
        }
        // Handle the completed stripe checkout event
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            // Fullfill the order - push to database
            return fulfillOrder(session)
                .then(() => res.status(200))
                .catch((error) =>
                    res.status(400).send(`Webhook Error: ${error.message}`)
                );
        }
    }
};

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};
