/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://xn--9w3b15cw7a.xn--3e0b707e/:path*`,
      },
    ];
  },
  output: 'standalone',
  images: {
    // 임시 이미지 서버 향후 삭제 가능
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },
    ],
    domains: ['new-health-genie.s3.ap-northeast-2.amazonaws.com'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
