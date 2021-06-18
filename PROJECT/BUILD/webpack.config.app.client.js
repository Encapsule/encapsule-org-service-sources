// THIS FILE IS CODE-GENERATED
// Encapsule holistic v0.1.05 "phoenix" FizFuN7ZTIqidY1Gt6pnNA 7f9ccadf0580665e58dfcc3da921640320f2eb3c
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
