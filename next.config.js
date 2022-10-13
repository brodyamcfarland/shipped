/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ["fakestoreapi.com"],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};
