import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    // plugins: createVitePlugins(env, command === "build"),
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 5173,
      host: true,
      open: false,
      // historyApiFallback: true, // ✨ 这里加上
      proxy: {
        "/api": {
          target: "https://192.168.144.216:8443/",
          changeOrigin: true,
          ws: true,
          secure: false,
          rewrite: (p) => p.replace(RegExp(`^/`), ""),
          bypass(req, res, options) {
            const proxyURL = options.target + options.rewrite(req.url);
            req.headers["x-req-proxyURL"] = proxyURL; // 设置未生效
            res.setHeader("x-req-proxyURL", proxyURL); // 设置响应头可以看到
          },
        },
        "/th_api": {
          target: "http://192.168.33.75:8889",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/th_api/, ""),
        },
      },
    },
    define: {
      __BUILDTIME__: JSON.stringify(new Date().toLocaleString("zh-CN")),
    },
  };
});
