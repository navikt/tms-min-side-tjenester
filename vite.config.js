import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import EnvironmentPlugin from "vite-plugin-environment";
import viteCompression from "vite-plugin-compression";
import { terser } from "rollup-plugin-terser";
import { resolve } from "path";

const imports = {
  react: "./external-react",
  "react-dom": "./external-react-dom",
};

export default ({ command }) => ({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
    }),
    viteCompression({
      algorithm: "brotliCompress",
    }),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin({ imports }),
      enforce: "pre",
      apply: "build",
    },
    terser(),
    cssInjectedByJsPlugin(),
    EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || "development",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/Mikrofrontend.jsx"),
      name: "tms-min-side-tjenester",
      formats: ["es"],
      external: ["react", "react-dom"],
      fileName: () => `tms-min-side-tjenester.js`,
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
