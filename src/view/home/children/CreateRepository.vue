<template>
  <div class="w-full h-full p-[3vw]">
    <div class="flex items-center">
      <el-button circle :icon="Back" />
      <div class="text-[2vw] font-bold ml-4">创建代码仓库</div>
    </div>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="">
        <div class="font-bold">所属项目<span class="text-[red]">*</span></div>
        <el-select v-model="form.region" placeholder="所属项目">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item :model="form">
        <div class="flex justify-between w-[16vw]">
          <div class="font-bold">仓库类型<span class="text-[red]">*</span></div>
          <div class="font-bold">仓库名称<span class="text-[red]">*</span></div>
        </div>
        <el-input
          v-model="input1"
          style="max-width: 600px"
          placeholder="仓库名称只支持字母、数字、下划线()、中划线(-)和点(.)的组合"
        >
          <template #prepend
            ><el-icon><Share /></el-icon> GET 仓库</template
          >
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <div class="font-bold">仓库描述</div>
        <el-input
          v-model="form.desc"
          placeholder="请输入仓库描述"
          type="textarea"
        />
      </el-form-item>
      <div class="font-bold">初始化仓库</div>
      <el-form-item label="">
        <el-checkbox-group
          v-model="form.type"
          class="flex flex-col justify-center"
        >
          <el-checkbox value="Online activities" name="type">
            生成README文件
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            添加.gitignore文件
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type" disabled>
            添加分支模型（仓库创建后将根据所选模型创建分支）
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <div class="font-bold">是否开源</div>
      <el-form-item label="">
        <el-radio-group
          v-model="form.resource"
          class="flex flex-col justify-center"
        >
          <el-radio value="Sponsor">
            私有仓库（仅对仓库成员可见，仓库成员可访问仓库。）
          </el-radio>
          <el-radio value="Venue" style="width: 401.99px"> 公开仓库 </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button color="#000" dark="isDark">完成创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { ref } from "vue";
import { Back, Share } from "@element-plus/icons-vue";
// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const input1 = ref("");
const onSubmit = () => {
  console.log("submit!");
};
</script>
<style scoped></style>
