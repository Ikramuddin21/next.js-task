/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "./src/assets/*",
        search: "",
      },
    ],
  },
};

export default nextConfig;
