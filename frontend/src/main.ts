import { createApp } from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import router from "./router";
import i18n from "./lang";
import api from "@/api";
import GlobComponents from "@/components";
createApp(App).use(i18n).use(router).use(api).use(GlobComponents).mount("#app");
