import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    viteSingleFile(), // 将 JS/CSS/小资源内联到 index.html
  ],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {},
  },
});
