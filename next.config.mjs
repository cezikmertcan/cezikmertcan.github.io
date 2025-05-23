/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    distDir:'docs',
    images:{
        unoptimized:true,
        remotePatterns:[
            {hostname:"*"}
        ]
    }
};

export default nextConfig;
