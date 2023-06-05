/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'files.stripe.com'
        ]
    },
    ignoreDuringBuilds: true,
}

module.exports = nextConfig
