import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";

const About = () => {
    const router = useRouter();

    return (
        <div className="bg-gradient-to-tr from-white to-gray-500 h-screen">
            <Header />
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white shadow-md mt-5 rounded-md">
                    <h2 className="text-center text-lg font-bold mb-5">
                        About
                    </h2>
                    <p className="text-sm">
                        Shipped is intended to showcase a full stack E-Commerce
                        App for portfolio purposes. Please do not use real card
                        info for Stripe Checkout. (Instead use 4242 pattern for
                        all card details)
                    </p>
                    <div>
                        <h1 className="font-bold mt-5">Tech Stack</h1>
                        <div className="grid grid-cols-2 gap-1">
                            <p className="tool">React</p>
                            <p className="tool">NextJS</p>
                            <p className="tool">Typescript</p>
                            <p className="tool">Redux</p>
                            <p className="tool">Tailwind</p>
                            <p className="tool">Next-Auth</p>
                            <p className="tool">Firebase</p>
                            <p className="tool">Stripe</p>
                        </div>
                        <h1 className="font-bold mt-5">Libraries</h1>
                        <div className="grid grid-cols-2 gap-1">
                            <p className="tool">HeroIcons</p>
                            <p className="tool">React-icons</p>
                            <p className="tool">Axios</p>
                            <p className="tool">Moment</p>
                            <p className="tool">React-Hot-Toast</p>
                            <p className="tool">React-responsive-carousel</p>
                        </div>
                    </div>

                    <button
                        onClick={() =>
                            router.push(
                                "https://github.com/brodyamcfarland/shipped"
                            )
                        }
                        className="button mt-8 flex items-center justify-center"
                    >
                        <AiFillGithub size={22} className="mr-3" />
                        Github Code
                    </button>
                </div>
            </main>
        </div>
    );
};

export default About;
