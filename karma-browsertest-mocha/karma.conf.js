module.exports = config => {
    config.set({
        basePath: "",
        frameworks: ["mocha", "webpack"],
        files: ["**/*/*.spec.ts"],
        preprocessors: {
            "**/*/*.spec.ts": ["webpack", "sourcemap"]
        },
        webpack: {
            resolve: {
                extensions: [".js", ".ts", ".tsx"]
            },
            module: {
                rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
            },
            stats: {
                colors: true,
                modules: true,
                reasons: true,
                errorDetails: true
            },
            devtool: "inline-source-map"
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: true,
        concurrency: Infinity
    });
};
