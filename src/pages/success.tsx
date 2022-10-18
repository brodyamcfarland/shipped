import React from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();

    return (
        <div className="bg-gradient-to-tr from-white to-gray-500 h-screen">
            <Header />
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white shadow-md mt-5 rounded-md">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10" />
                        <h1 className="text-xl font-bold">
                            Your order has been confirmed!
                        </h1>
                    </div>
                    <p>
                        Thank you for shopping with Shipped. We will send a
                        confirmation once your order has shipped. You can check
                        the status of your order(s) by clicking the link below.
                    </p>
                    <button
                        onClick={() => router.push("/orders")}
                        className="button mt-8"
                    >
                        My Orders
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Success;
