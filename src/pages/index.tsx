import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { GetServerSideProps } from "next";
import { Products } from "../../types";

interface Props {
    products: Products[];
}

const Home = ({ products }: Props) => {
    return (
        <div className="bg-gray-400">
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
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return {
        props: {
            products,
        },
    };
};
