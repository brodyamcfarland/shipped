/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ["fakestoreapi.com"],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
};
