<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="最近访问" name="first">
      <div class="w-full h-[50vh] flex flex-col justify-center items-center">
        <div>
          <img src="../../assets/images/4.png" class="w-[7vw] h-[8vw]" alt="" />
        </div>
        <div class="">暂无数据</div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="全部仓库" name="second">Config</el-tab-pane>
    <el-tab-pane label="开源仓库" name="third">Role</el-tab-pane>
  </el-tabs>
  <el-button color="#2c323c" class="absolute top-[70px] right-[10px]"
    >创建仓库</el-button
  >
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style></style>
