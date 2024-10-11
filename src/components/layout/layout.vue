<template>
  <el-container>
    <el-aside width="64px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="navigateto('layout/workbench')">
          <Icon icon="icon-park-outline:workbench" width="16" height="16" />
          <template #title>工作台</template>
        </el-menu-item>
        <el-menu-item index="2" @click="navigateto('layout/project')">
          <Icon icon="solar:folder-open-outline" width="16" height="16" />
          <template #title>项目</template>
        </el-menu-item>
        <el-menu-item index="3" @click="navigateto('layout/ai')">
          <Icon icon="ph:open-ai-logo" width="16" height="16" />
          <template #title>AI</template>
        </el-menu-item>
        <el-menu-item index="4" @click="navigateto('layout/matter')">
          <Icon icon="hugeicons:note-edit" width="16" height="16" />
          <template #title>事项</template>
        </el-menu-item>
        <el-menu-item index="5" @click="navigateto('layout/code')">
          <Icon icon="solar:code-square-outline" width="16" height="16" />
          <template #title>代码</template>
        </el-menu-item>
        <el-menu-item index="6">
          <Icon icon="tabler:cube" width="16" height="16" />
          <template #title>制品</template>
        </el-menu-item>
        <el-menu-item index="7">
          <Icon icon="ic:baseline-insights" width="16" height="16" />
          <template #title>洞察</template>
        </el-menu-item>
        <el-menu-item index="8">
          <Icon
            icon="material-symbols:menu-book-outline"
            width="16"
            height="16"
          />
          <template #title>知识</template>
        </el-menu-item>

        <el-menu-item index="9">
          <Icon icon="ic:outline-hdr-auto" width="16" height="16" /><template
            #title
            >自动化</template
          >
        </el-menu-item>
        <el-menu-item index="10">
          <Icon icon="icon-park-outline:people" width="16" height="16" />
        </el-menu-item>
        <el-menu-item index="11">
          <Icon icon="ci:more-grid-big" width="1.2rem" height="1.2rem" />
        </el-menu-item>
        <el-menu-item index="12">
          <Icon icon="mdi:bell-outline" width="1.2rem" height="1.2rem" />
        </el-menu-item>
        <el-menu-item index="13">
          <Icon icon="tdesign:setting" width="1.2rem" height="1.2rem" />
        </el-menu-item>
        <el-menu-item index="14">
          <Icon icon="fe:question" width="1.2rem" height="1.2rem" />
        </el-menu-item>
        <el-menu-item index="15">
          <Icon
            icon="carbon:user-avatar-filled"
            width="1.2rem"
            height="1.2rem"
          />
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="border-bottom: 1px solid grey">
        <div class="h-[50px] flex items-center font-bold">代码仓库</div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useRouter } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const router = useRouter();
const navigateto = (path: String) => {
  router.push(`/${path}`);
};
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
.el-main {
  padding: 0;
}
.el-tabs__header {
  height: 10vh;
}
.el-tabs__nav-scroll {
  padding-left: 3vw;
}
</style>
