import tHeader from "./tHeader/index.vue";
import { App } from "vue";
export default {
  install(app: App) {
    app.component(tHeader.name, tHeader);
  },
};
