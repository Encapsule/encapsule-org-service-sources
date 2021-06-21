// THIS FILE IS CODE-GENERATED
// Encapsule holistic v0.1.05 "phoenix" HedsjSNAQqKZLbejVGDmDQ b0feffd764521ea465f7e9f203b3786cd28e80af
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
