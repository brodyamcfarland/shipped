import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

interface Props {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const min_rating = 1;
const max_rating = 5;
const rating_array = [1, 2, 3, 4, 5];

const Product = ({ id, title, price, description, category, image }: Props) => {
    const [rating, setRating] = useState<number>(0);

    const [isFreeShipping, setIsFreeShipping] = useState<boolean>(false);

    useEffect(() => {
        setRating(
            Math.floor(Math.random() * (max_rating - min_rating + 1)) +
                min_rating
        );
        setIsFreeShipping(Math.random() < 0.5);
    }, []);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-lg rounded-md ">
            <p className="absolute top-2 right-2 text-[10px] text-gray-500 uppercase">
                {category}
            </p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3 font-bold">{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill(1)
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-[#49acad]" />
                    ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5 font-bold">
                <Currency quantity={price} />
            </div>
            {isFreeShipping && (
                <div className="flex items-center space-x-2 -mt-2 mb-3">
                    <div className="text-xs flex items-center text-gray-500">
                        <CheckCircleIcon className="h-5 text-[#050A2F] mr-1" />
                        <p>FREE SHIPPING</p>
                    </div>
                </div>
            )}
            <button className="mt-auto button" type="button">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;
