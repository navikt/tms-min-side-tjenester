import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import { resolve } from "path";

const reactUrl = "https://min-side-assets.dev.intern.nav.no/react/17/esm/index.js";
const reactDomUrl = "https://min-side-assets.dev.intern.nav.no/react-dom/17/esm/index.js";

const imports = {
  react: reactUrl,
  "react-dom": reactDomUrl,
};

export default ({ command }) => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin({ imports }),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/App.jsx"),
      name: "tms-min-side-tjenester",
      formats: ["es"],
      fileName: () => `bundle.js`,
    },
    cssCodeSplit: false,
    minify: true,
  },
  test: {
    global: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
