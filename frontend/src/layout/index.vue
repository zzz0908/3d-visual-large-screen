<template>
  <div id="layout">
    <t-header></t-header>
    <div class="router-view-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
#layout {
  .router-view-wrap {
    padding: 20px;
  }
}
</style>
