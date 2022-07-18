import { createI18n } from "vue-i18n";

import zhCn from "./zh";
import enUs from "./en";

import zhEl from "element-plus/es/locale/lang/zh-cn";
import enEl from "element-plus/es/locale/lang/en";

function getLangAll() {
  const message = {
    "zh-CN": { ...zhEl, ...zhCn },
    "en-US": { ...enEl, ...enUs },
  };
  return message;
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("lang") || "zh-CN",
  messages: getLangAll(),
});

export { getLangAll };
export default i18n;
