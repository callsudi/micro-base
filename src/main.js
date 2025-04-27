import { createApp, h } from "vue";
import App from "./App.vue";

import router from "./router/index.js";

import "@/assets/styles/common.less";
import "@/assets/iconFonts/iconfont.css";

const app = createApp(App);

import { isOk } from "@/utils/tool";
app.config.globalProperties.$isOk = isOk;

app.use(router).mount("#app");
