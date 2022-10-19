import React from "react";
import { OrdersType } from "../pages/orders";
import moment from "moment";
import Currency from "react-currency-formatter";

const Order = ({
    id,
    amount,
    amountShipping,
    items,
    timestamp,
    images,
}: OrdersType) => {
    return (
        <div className="relative border shadow-lg rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-[#050A2F] text-sm rounded-t-md">
                <div className="text-white">
                    <p className="font-bold">ORDER PLACED</p>
                    <p className="text-gray-300">
                        {moment.unix(timestamp).format("DD MMM YYYY")}
                    </p>
                </div>

                <div className="text-white">
                    <p className="text-sm font-bold">TOTAL</p>
                    <p className="text-gray-300">
                        <Currency quantity={amount} currency="USD" /> - Delivery{" "}
                        <Currency quantity={amountShipping} currency="USD" />
                    </p>
                </div>
                <p className="text-[#5FE1E5] text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right">
                    {items.length} Item(s)
                </p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-[10px] text-gray-300">
                    ORDER # {id}
                </p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            alt=""
                            className="h-20 object-contain sm:h-32"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Order;
