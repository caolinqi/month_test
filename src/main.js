import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { Icon } from "@iconify/vue/dist/iconify.js";
import router from "./router/router";
createApp(App).use(ElementPlus).use(Icon).use(router).mount("#app");
