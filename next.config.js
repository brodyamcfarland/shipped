/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ["fakestoreapi.com"],
    },
    env: {
        NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
        NEXT_PUBLIC_GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    },
};
