import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { GetServerSideProps } from "next";
import { Products } from "../../types";
import { getSession } from "next-auth/react";
import { useState } from "react";
export interface ProductQuery {
    products: Products[];
}

const Home = ({ products }: ProductQuery) => {
    return (
        <div className="bg-gradient-to-tr from-white to-gray-500">
            <Head>
                <title>Shipped</title>
            </Head>
            <Header />
            <main className="max-w-screen-2xl mx-auto">
                <Banner />
                <ProductFeed products={products} />
            </main>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const session = await getSession(context);
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return {
        props: {
            products,
            session,
        },
    };
};
