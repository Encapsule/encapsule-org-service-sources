// THIS FILE IS CODE-GENERATED
// Encapsule holistic v0.3.1 "snowpack" tYozWw5BRzSa3OdTdEng9g 3eafb6ba173e9fd6c41a267d87603d269b70ca48
//
// webpack.config.app.client.js
//

const path = require('path');
const webpack = require('webpack');
const entryPath = path.resolve(path.join(__dirname, '../../BUILD/transpile-phase1/CLIENT/html5-service-runtime.js'));
const outputPath = path.resolve(path.join(__dirname, '../../BUILD/webpack-phase2/'));

console.log("webpack entry module path: " + entryPath);
console.log("webpack output path: " + outputPath);

module.exports = {
    mode: 'development',
    plugins: [
        // See: https://viglucci.io/how-to-polyfill-buffer-with-webpack-5
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
        })
    ],
    entry: {
        main: entryPath
    },
    target: "web",
    output: {
        path: outputPath,
        filename: 'html5-service-runtime-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        fallback: {
            buffer: require.resolve("buffer/"),
            crypto: require.resolve("crypto-browserify"),
            path: require.resolve("path-browserify"),
            process: require.resolve("process"),
            stream: require.resolve("stream-browserify"),
            url: require.resolve("url")
        }
    }
};
