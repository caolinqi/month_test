<template>
  <div class="flex">
    <div>
      <img
        src="../../assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        alt=""
        class="w-[40vw] h-[55vw]"
      />
    </div>
    <div class="flex flex-col h-[28vw] justify-around m-auto">
      <h1 class="text-[#20274b] text-[2vw] font-bold flex justify-center">
        登录，即刻创造您的应用
      </h1>
      <div>
        <el-input v-model="username" class="w-[30vw]" placeholder="账号" />
      </div>
      <div>
        <el-input
          v-model="password"
          show-password
          class="w-[30vw]"
          placeholder="密码"
        />
      </div>
      <div>
        <el-checkbox v-model="checked" size="large" />我已阅读并同意
        <a href="#" class="text-blue-500">用户协议</a>和
        <a href="#" class="text-blue-500">隐私政策</a>
      </div>
      <div>
        <el-button type="primary" class="w-[30vw]">登录</el-button>
      </div>
      <div class="flex justify-center">
        还未注册？<a href="#" class="text-blue-500">立即注册</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const checked = ref(false);
const username = ref("");
const password = ref("");
</script>
