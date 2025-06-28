import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 4000,
    // 解决 CORS 问题
    // 通过代理将 API 请求转发到后端服务器
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
      },
    },
  },
});
