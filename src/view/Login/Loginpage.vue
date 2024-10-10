<template>
  <div class="flex h-[100vh]">
    <!-- 左侧图片部分 -->
    <div class="w-[576px] h-full">
      <el-carousel height="100vh">
        <el-carousel-item>
          <img
            src="../../assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
            alt=""
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="../../assets/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png"
            alt=""
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="../../assets/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
            alt=""
          />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 右侧登录表单部分 -->
    <div class="flex flex-col flex-1 h-full justify-center items-center">
      <h1 class="text-[#20274b] text-[32px] font-bold mb-[5vw]">
        登录，即刻创造您的应用
      </h1>

      <el-space direction="vertical" size="large" fill class="w-[400px]">
        <el-input
          v-model="loginInfo.username"
          class="h-[50px]"
          placeholder="账号"
        />
        <el-input
          v-model="loginInfo.password"
          class="h-[50px]"
          show-password
          placeholder="密码"
        />
      </el-space>

      <div class="flex items-center w-[400px] mt-[1vw]">
        <el-checkbox v-model="checked" size="large" /> 我已阅读并同意
        <el-button type="primary" link :style="{ color: '#0035e3' }">
          用户协议
        </el-button>
        和<el-button type="primary" link :style="{ color: '#0035e3' }">
          隐私政策
        </el-button>
      </div>

      <el-button
        type="primary"
        class="mt-[30px] w-[400px] h-[50px]"
        size="large"
        color="#0035e3"
        @click="longinHandler"
        >登录</el-button
      >
      <div class="flex justify-center mt-[20px]">
        还未注册？
        <el-button type="primary" :style="{ color: '#0035e3' }" link>
          立即注册
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAddress } from "../../api/index";
import to from "await-to-js";
import { ElMessage } from "element-plus";

const router = useRouter();
const loginInfo = ref({
  username: "3341538119@qq.com",
  password: "caolinqi041014",
});
const longinHandler = async () => {
  const loginData = {
    grant_type: "password",
    username: loginInfo.value.username,
    password: loginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getAddress(loginData));
  console.log(err, res);
  ElMessage({
    message: "登录成功",
    type: "success",
  });
  router.push("/layout");
};

const checked = ref(false);
</script>
