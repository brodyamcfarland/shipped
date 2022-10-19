import { GetServerSideProps } from "next/types";
import React from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header";
import { Products } from "../../../../types";
import Product from "../../../components/Product";

interface Props {
    products: Products[];
}

const Category = ({ products }: Props) => {
    const router = useRouter();
    const { category } = router.query;
    const query: string = String(category).toLowerCase();

    return (
        <div className="bg-gradient-to-tr from-white to-gray-500 min-h-screen">
            <Header />
            <p className="flex flex-col justify-center items-center bg-white mt-5 mx-5 py-1 rounded-md shadow-md font-bold">{`Search Results: "${category}"`}</p>
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
                {products
                    .filter((product) =>
                        product.category.toLowerCase().includes(`${category}`)
                    )
                    .map((filteredProduct) => (
                        <Product
                            key={filteredProduct.id}
                            id={filteredProduct.id}
                            title={filteredProduct.title}
                            price={filteredProduct.price}
                            description={filteredProduct.description}
                            category={filteredProduct.category}
                            image={filteredProduct.image}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return {
        props: {
            products,
        },
    };
};
