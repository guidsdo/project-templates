import pluginTypescript from "@rollup/plugin-typescript";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        pluginTypescript({
            tsconfig: "tsconfig.json",
            sourceMap: true,
            inlineSources: true
        })
    ],
    worker: {
        plugins: () => [
            pluginTypescript({
                tsconfig: "tsconfig.json",
                sourceMap: true,
                inlineSources: true
            })
        ]
    },
    esbuild: { keepNames: true },
    build: { minify: false }
});
