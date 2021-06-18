// THIS FILE IS CODE-GENERATED
// Encapsule holistic v0.1.05 "phoenix" PXELWB0pQUuMYhqlMTY9_Q 979b4127c1566b605693323cabc306633e498836
//
// webpack.config.app.client.js
//

const path = require('path');
const entryPath = path.resolve(path.join(__dirname, '../../BUILD/transpile-phase1/CLIENT/html5-service-runtime.js'));
const outputPath = path.resolve(path.join(__dirname, '../../BUILD/webpack-phase2/'));

console.log("webpack entry module path: " + entryPath);
console.log("webpack output path: " + outputPath);

module.exports = {
    mode: 'development',
    plugins: [
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
    }
};
