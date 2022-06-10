const { parsed: appEnv } = require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

const webpack = require('webpack');

const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(appEnv));
    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
