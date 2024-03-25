import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

const CI_MODE = Boolean(process.env && process.env.CI_MODE);

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "jsdom",
            reporters: CI_MODE ? ["default", "junit"] : ["default"],
            outputFile: { junit: process.env.RESULTS_FILE ?? "testresults/junit.xml" },
            setupFiles: ["src/testHelpers/reactTestingLibrarySetup", "src/testHelpers/globalSetup"],
            coverage: {
                enabled: true,
                provider: "istanbul",
                reporter: CI_MODE ? ["cobertura"] : ["text"],
                reportsDirectory: "coverage"
            }
        }
    })
);
