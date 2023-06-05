/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'files.stripe.com'
        ]
    },
    ignoreDuringBuilds: true,
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig
