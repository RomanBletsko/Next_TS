// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "robohash.org",
      },
    ],
  },
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         hostname: "robohash.org",
//       },
//     ],
//   },
// };
