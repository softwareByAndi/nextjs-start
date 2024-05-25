/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    devIndicators: {
        autoPrerender: false
    },
    experimental: {
        ipv6Enabled: true
    }
};

export default nextConfig;
