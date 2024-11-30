import { defineConfig } from "@rslib/core";

export default defineConfig({
    lib: [{
        format: "esm",
        syntax: "esnext",
        bundle: true,
        dts: {
            bundle: true
        }
    }],
    source: {
        entry: {
            index: "./src/index.ts",
            sharedDependenciesResolutionPlugin: "./src/sharedDependenciesResolutionPlugin.ts",
            nonCacheableRemoteEntryPlugin: "./src/nonCacheableRemoteEntryPlugin.ts"
        }
    },
    output: {
        target: "node",
        distPath: {
            root: "./dist"
        },
        cleanDistPath: true,
        minify: false
    },
    tools: {
        htmlPlugin: false
    }
});
