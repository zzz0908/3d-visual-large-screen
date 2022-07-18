<template>
  <div>
    <div class="header-list">
      <el-button type="primary" round>{{ $t("list.create") }}</el-button>
    </div>
    <el-table :data="state.tableData" border style="width: 100%">
      <el-table-column
        v-for="col in tableColumn"
        v-bind="col"
        :label="$t(col.label)"
      >
        <template #default="scope">
          <!-- 标签 -->
          <div v-if="col.slot === 'tag'">
            <el-tag
              v-for="tag in scope.row[col.prop]"
              :key="tag"
              style="margin-right: 5px"
            >
              {{ tag }}
            </el-tag>
          </div>
          <!-- 操作 -->
          <div v-else-if="col.slot === 'operations'">
            <el-button link type="primary" size="small">{{
              $t("list.edit")
            }}</el-button>
            <el-button link type="primary" size="small">{{
              $t("list.view")
            }}</el-button>
            <el-button link type="danger" size="small">{{
              $t("list.delete")
            }}</el-button>
          </div>
          <!-- 文本 -->
          <div v-else>{{ scope.row[col.prop] || "--" }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { tableColumn } from "./data";
const { proxy }: any = getCurrentInstance();
const state = reactive({
  tableData: [],
});
const getTableData = () => {
  proxy.$api.listApi.get3dList().then((res) => {
    state.tableData = res.data;
  });
};
onMounted(() => {
  getTableData();
});
</script>
<style lang="scss" scoped>
.header-list {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
