 import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(() => {
  const base = process.env.VITE_BASE_PATH || "/";

  return {
    base,
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      // 👇 Ensures Chrome responsive & mobile touch events work normally
      host: "0.0.0.0",
      port: 5173,
      open: true,
      cors: true,
      hmr: {
        overlay: false,
      },
    },
  };
});
