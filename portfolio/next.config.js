/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
      "upload.wikimedia.org",
      "cdn.worldvectorlogo.com",
      "cdn-images.himalayas.app",
      "mui.com",
      "vectorlogo.zone",
      "adware-technologies.s3.amazonaws.com"
    ],
  },
}

module.exports = nextConfig
