<template>
  <div id="t-header">
    <div></div>
    <h3>{{ $t("productTitle") }}</h3>
    <div class="t-header-right">
      <el-switch
        v-model="isDark"
        inline-prompt
        active-icon="Sunny"
        inactive-icon="Moon"
      />
      <el-dropdown @command="changeLang">
        <span class="el-dropdown-link">语言</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
            <el-dropdown-item command="en-US">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup name="tHeader">
const isDark = ref(false);
watch(
  () => isDark.value,
  (val) => {
    const htmlDom = document.getElementsByTagName("html")?.[0];
    if (!htmlDom) return;
    val ? (htmlDom.className = "dark") : (htmlDom.className = "");
  }
);
const changeLang = inject("changeLang") as
  | ((...args: any[]) => any)
  | undefined;
</script>
<style lang="scss" scoped>
#t-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  .t-header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    :deep(.el-switch) {
      margin-right: 10px;
    }
  }
}
</style>
