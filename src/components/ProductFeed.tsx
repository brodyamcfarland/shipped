import React from "react";
import Product from "../components/Product";
import { Products } from "../../types";

interface Props {
    products: Products[];
}

const ProductFeed = ({ products }: Props) => {
    return (
        <div>
            {products.map(
                ({
                    id,
                    title,
                    price,
                    description,
                    category,
                    image,
                }: Products) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                )
            )}
        </div>
    );
};

export default ProductFeed;
