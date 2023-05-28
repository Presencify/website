/** @type {import('next').NextConfig} */
const nextConfig = {
webpack(config, { dev: isDev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.svg$/i,
      loader: "next-image-loader",
      issuer: { not: /\.(css|scss|sass)$/ },
      dependency: { not: ["url"] },
      resourceQuery: { not: [/svgr/] },
      options: { isServer, isDev, basePath: "", assetPrefix: "" },
    });
  return config
}
}

module.exports = nextConfig
