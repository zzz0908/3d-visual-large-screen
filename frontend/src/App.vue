<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { ref, provide } from "vue";
import i18n, { getLangAll } from "@/lang";
const locale = ref(undefined);
const changeLang = (lang: string): void => {
  lang = lang || "zh-CN";
  i18n.global.locale.value = lang;
  localStorage.setItem("lang", lang);
  locale.value = getLangAll()[lang];
};
changeLang(localStorage.getItem("lang") || "zh-CN");
provide("changeLang", changeLang);
</script>
<style lang="scss" scoped></style>
