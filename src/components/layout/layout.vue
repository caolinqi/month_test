<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <Icon
        icon="icon-park-outline:workbench"
        width="16"
        height="16"
        style="color: black"
      />
      <template #title>工作台</template>
    </el-menu-item>
    <el-menu-item index="2">
      <Icon
        icon="solar:folder-open-outline"
        width="16"
        height="16"
        style="color: black"
      />
      <template #title>项目</template>
    </el-menu-item>
    <el-menu-item index="3">
      <Icon
        icon="ph:open-ai-logo"
        width="16"
        height="16"
        style="color: black"
      />
      <template #title>AI</template>
    </el-menu-item>
    <el-menu-item index="4">
      <Icon
        icon="hugeicons:note-edit"
        width="16"
        height="16"
        style="color: black"
      />
      <template #title>事项</template>
    </el-menu-item>
    <el-menu-item index="4">
      <Icon
        icon="hugeicons:note-edit"
        width="16"
        height="16"
        style="color: black"
      />
      <template #title>事项</template>
    </el-menu-item>
    <el-menu-item index="5">
      <Icon icon="tabler:cube" width="16" height="16" style="color: black" />
      <template #title>事项</template>
    </el-menu-item>
    <el-menu-item index="6">
      <Icon
        icon="hugeicons:note-edit"
        width="16"
        height="16"
        style="color: black"
      />
      <template #title>事项</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
