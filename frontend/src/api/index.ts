import listApi from "./list";
import { App } from "vue";
const api = {
  listApi,
};
export default {
  install(app: App) {
    app.config.globalProperties.$api = api;
  },
};
