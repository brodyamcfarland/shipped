import { Items } from "../../../types";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: any, res: any) => {
    const { items, email } = req.body;

    const transformedItems = items.map((item: Items) => ({
        quantity: 1,
        price_data: {
            currency: "usd",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image],
                description: item.description,
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "usd",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 7,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 10,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 500,
                        currency: "usd",
                    },
                    display_name: "Standard Delivery",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 3,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 5,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1000,
                        currency: "usd",
                    },
                    display_name: "Next Day Delivery",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 2,
                        },
                    },
                },
            },
        ],
        shipping_address_collection: {
            allowed_countries: ["US", "CA"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item: Items) => item.image)),
        },
    });

    res.status(200).json({ id: session.id });
};
