import React from "react";
import Header from "../components/Header";
import Image from "next/image";

const checkout = () => {
    return (
        <div className="bg-gray-400">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-md items-center">
                    <Image
                        src="/SupachatBannerSmall.png"
                        height={250}
                        width={1020}
                        objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-2xl border-b pb-4">Cart</h1>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default checkout;
