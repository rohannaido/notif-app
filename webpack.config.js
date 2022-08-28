const path = require('path');

const appConfig = {
    // ...rootConfig,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, ''),
    },
  };

const serviceWorkerConfig = {
    // ...rootConfig,
    entry: './src/firebase-messaging-sw.js',
    // TODO(jhuleatt): Remove this once https://github.com/firebase/firebase-js-sdk/issues/5314 is resolved
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    output: {
      filename: 'firebase-messaging-sw.js',
      path: path.resolve(__dirname, ''),
    },
};

module.exports = [appConfig, serviceWorkerConfig];