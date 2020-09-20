// next.config.js
// const withTypescript = require('@zeit/next-typescript')
// module.exports = withTypescript()
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  inlineImageLimit: 16384,
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL, // Pass through env variables
    API_PATH: process.env.API_PATH,
    MAINAPP: process.env.MAINAPP,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        }
      }],
    });

    config.module.rules.push(
      {
        test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico)$/,
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          publicPath: `/_next/static/files`,
          // outputPath: 'static/files'
        }
      },
    );

    return config;
  }
};
