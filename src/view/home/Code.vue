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
    <el-tab-pane label="开源仓库" name="third"
      ><div class="w-full h-[50vh] flex flex-col justify-center items-center">
        <div>
          <img src="../../assets/images/4.png" class="w-[7vw] h-[8vw]" alt="" />
        </div>
        <div class="">暂无数据</div>
      </div></el-tab-pane
    >
  </el-tabs>
  <el-button
    @click="toCreateCodeRepository"
    color="#2c323c"
    class="absolute top-[70px] right-[10px]"
    >创建仓库</el-button
  >
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
const activeName = ref("first");
const router = useRouter();
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const toCreateCodeRepository = () => {
  console.log("Button clicked!"); // 确认点击事件触发
  router.push("/layout/CreateRepository");
};
</script>

<style></style>
