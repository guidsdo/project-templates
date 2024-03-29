const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};
