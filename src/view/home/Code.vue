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
    <el-tab-pane label="全部仓库" name="second">
      <div class="flex justify-center items-center w-full h-full">
        <div class="w-[60vw] h-[40vw] flex flex-col items-center">
          <div class="flex flex-col justify-center items-center mb-[5vw]">
            <h1 class="text-[30px] font-bold mb-[2vw]">欢迎使用代码仓库</h1>
            <p class="">
              代码仓库用于托管基于 GIT 或 SVN 管理的代码库。通过 Review
              合并请求来审查代码变更。
            </p>
            <p class="">版本发布可以用来标记、发布代码版本。</p>
          </div>
          <div class="flex justify-around items-center w-full">
            <div class="w-[30vw] flex flex-col justify-center items-center">
              <img src="../../assets/images/1.svg" alt="" />
              <div>
                <div class="text-center font-bold">创建代码仓库</div>
                <p class="">浏览、 编辑代码以及查看代码提交</p>
                <p class="text-center">记录</p>
              </div>
            </div>
            <div class="w-[30vw] flex flex-col justify-center items-center">
              <img src="../../assets/images/2.svg" alt="" />
              <p class="text-center font-bold">合并请求</p>
              <p class="">发起合井请求井遂请协作者</p>
              <p class="text-center">Review 变更内容</p>
            </div>
            <div class="w-[30vw] flex flex-col justify-center items-center">
              <img src="../../assets/images/3.svg" alt="" />
              <p class="text-center font-bold">代码版本</p>
              <p class="">发布、标记代码版本</p>
            </div>
          </div>
          <div>
            <el-button
              @click="toCreateCodeRepository"
              class="relative top-4"
              color="#2c323c"
              >创建仓库</el-button
            >
          </div>
        </div>
      </div>
      <!-- <div>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"
        />
      </div> -->
    </el-tab-pane>
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
const value = ref([]);
const options = [
  {
    value: "guide",
    label: "所属项目",
  },
];
const handleChange = (value) => {
  console.log(value);
};
</script>

<style></style>
