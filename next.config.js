module.exports = {
  // ...other config options...
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin",
      },
    ];
  },
};
