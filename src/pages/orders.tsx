import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import React from "react";
import Header from "../components/Header";
import db from "../../firebase";
import moment from "moment";

const Orders = ({ orders }: any) => {
    const { data: session } = useSession();
    console.log(orders);

    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-xl border-b mb-2 pb-1 border-[#5FE1E5]">
                    Your Orders
                </h1>
                {session ? (
                    <h2>x Orders</h2>
                ) : (
                    <h2>Please sign in to see orders.</h2>
                )}

                <div className="mt-5 space-y-4"></div>
            </main>
        </div>
    );
};

export default Orders;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const session = getSession(context);
    console.log(context);

    if (!session) {
        return {
            props: {},
        };
    }

    const stripeOrders = await db
        .collection("users")
        .doc(session.user.email)
        .collection("orders")
        .orderBy("timestamp", "desc")
        .get();

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    };
};
