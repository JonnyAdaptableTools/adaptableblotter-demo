// next.config.js
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withTypescript = require('@zeit/next-typescript');

let nextConfig = withCSS(
  Object.assign({}, withImages(), {
    cssModules: false
  })
);
nextConfig = withTypescript(withFonts(nextConfig));

module.exports = Object.assign({}, nextConfig, {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts']
});
