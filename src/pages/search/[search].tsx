import { GetServerSideProps } from "next/types";
import React from "react";
import { ProductQuery } from "..";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Products } from "../../../types";

const Search = ({ products }: ProductQuery) => {
    const router = useRouter();
    const { search } = router.query;

    return (
        <div className="bg-gradient-to-tr from-white to-gray-500 h-screen">
            <Header />
            <div>
                {products?.filter((product: any, search: any) => {
                    if (product.title.toLowerCase().includes(search?.toLowerCase())) {
                        
                    }
                }.map((product) => (
                    <div>{product.id}</div>
                ))}
            </div>
            <div>{search}</div>
        </div>
    );
};

export default Search;

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
