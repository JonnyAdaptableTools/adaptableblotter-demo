// next.config.js
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withTypescript = require('@zeit/next-typescript');

let nextConfig = withCSS(
  Object.assign({}, withImages(), {
    cssModules: false,
  })
);
nextConfig = withTypescript(withFonts(nextConfig));

module.exports = Object.assign({}, nextConfig, {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: false,
      }),
    ];

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});
