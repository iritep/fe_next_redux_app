const webpack = require('webpack');
const withImages = require('next-images');

const { parsed: appEnv } = require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

const nextConfig = withImages({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(appEnv));
    return config;
  },
  reactStrictMode: false,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['assets.gate4dev.net'],
  },
});

module.exports = nextConfig;
