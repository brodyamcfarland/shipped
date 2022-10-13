import { CheckCircleIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { Items } from "../../types";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    isFreeShipping,
}: Items) => {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            isFreeShipping,
        };
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            isFreeShipping,
        };
        dispatch(removeFromBasket({ id }));
    };

    return (
        <div className="grid grid-cols-5">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
                alt=""
            />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill(1)
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-[#49acad]" />
                        ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} />
                {isFreeShipping && (
                    <div className="flex items-center space-x-2 mt-3">
                        <div className="text-xs flex items-center text-gray-500">
                            <CheckCircleIcon className="h-5 text-[#050A2F] mr-1" />
                            <p>FREE SHIPPING</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>
                    Add to Cart
                </button>
                <button className="button" onClick={removeItemFromBasket}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
