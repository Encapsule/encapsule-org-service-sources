// THIS FILE IS CODE-GENERATED
// Encapsule holistic v0.3.5 "snowmelt" q5C8_UzLS4WT2TVWrNsd7Q 3dc5903a7448efde3cec0a50edad661456993836
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
        filename: 'html5-service-runtime-bundle.js',
        hashFunction: "sha256" // https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported/69394785#69394785
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
