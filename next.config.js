/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};

module.exports = nextConfig;
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "image.tmdb.org",
//         port: "",
//         pathname: "/t/p/original/**",
//       },
//       {
//         protocol: "https",
//         hostname: "image.tmdb.org",
//         port: "",
//         pathname: "/t/p/w500/**",
//       },
//     ],
//   },
// };
