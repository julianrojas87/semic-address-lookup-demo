const path = require("path");
const WorkerPlugin = require('worker-plugin');

const browserConfig = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "q": path.resolve(__dirname, "webpack/shimQ.js")
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./dist/",
        library: "TreeComplete",
        libraryTarget: "umd",
    },
    plugins: [
        new WorkerPlugin()
    ]
};

module.exports = browserConfig;
