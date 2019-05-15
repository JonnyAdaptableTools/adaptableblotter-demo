// next.config.js
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

let nextConfig = withSass(
  withCSS(
    Object.assign({}, withImages(), {
      cssModules: false,
    })
  )
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

    // needed in order to avoid 2 copies of react being included, which makes hooks not work
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias.react = path.resolve('./node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve(
      './node_modules/react-dom'
    );

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});
