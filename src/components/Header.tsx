import React from "react";
import Image from "next/image";
import Logo from "../assets/ShippedLogo.png";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            <div className="bg-[#050A2F] flex items-center p-1 flex-grow">
                {/* Logo Side */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mb-1 pr-3">
                    <Image
                        onClick={() => router.push("/")}
                        src={Logo}
                        width={80}
                        height={30}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search Bar */}
                <div className="hidden sm:flex bg-[#5FE1E5] hover:bg-[#3d9194] duration-500 items-center h-8 rounded-md flex-grow cursor-pointer">
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                        type="text"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right Side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div
                        onClick={!session ? () => signIn() : () => signOut()}
                        className="link"
                    >
                        <p className="hover: underline">
                            {session
                                ? `Hello, ${session.user?.name}`
                                : "Sign In"}
                        </p>
                        <p className="font-extrabold md:text-sm">
                            Account & Lists
                        </p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div
                        onClick={() => router.push("/checkout")}
                        className="relative link flex items-center"
                    >
                        <span className="absolute top-0 left-8 h-4 w-4 rounded-full bg-red-700 text-center font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                    </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <div className="flex items-center bg-[#050a2fd7] text-white text-sm space-x-3 p-1">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="filter-tags">Streaming</p>
                <p className="filter-tags">Business</p>
                <p className="filter-tags">Today's Deals</p>
                <p className="filter-tags hidden lg:inline-flex">Tech</p>
                <p className="filter-tags hidden lg:inline-flex">Food</p>
                <p className="filter-tags hidden lg:inline-flex">Buy Again</p>
                <p className="filter-tags hidden lg:inline-flex">Health</p>
                <p className="filter-tags hidden lg:inline-flex">Clothing</p>
            </div>
        </header>
    );
};

export default Header;
