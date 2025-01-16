import pluginTypescript from "@rollup/plugin-typescript";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        pluginTypescript({
            tsconfig: "tsconfig.json",
            sourceMap: true,
            inlineSources: true
        })
    ],
    esbuild: { keepNames: true },
    build: { minify: false }
});
