<template>
  <el-row class="tac">
    <el-col :span="1.3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" class="flex flex-col mb-[1vw]">
          <el-icon><Monitor /></el-icon>
          <span>工作台</span>
        </el-menu-item>
        <el-menu-item index="2" class="flex flex-col mb-[1vw]">
          <el-icon><FolderOpened /></el-icon>
          <span>项目</span>
        </el-menu-item>
        <el-menu-item index="3" class="flex flex-col mb-[1vw]">
          <el-icon><ChromeFilled /></el-icon>
          <span>AI</span>
        </el-menu-item>
        <el-menu-item index="4" class="flex flex-col mb-[1vw]">
          <el-icon><Memo /></el-icon>
          <span>事项</span>
        </el-menu-item>
        <el-menu-item index="5" class="flex flex-col mb-[1vw]">
          <el-icon><DCaret /></el-icon>
          <span>代码</span>
        </el-menu-item>
        <el-menu-item index="6" class="flex flex-col mb-[1vw]">
          <el-icon><Box /></el-icon>
          <span>制品</span>
        </el-menu-item>
        <el-menu-item index="7" class="flex flex-col mb-[1vw]">
          <el-icon><Sort /></el-icon>
          <span>洞察</span>
        </el-menu-item>
        <el-menu-item index="8" class="flex flex-col mb-[1vw]">
          <el-icon><Notebook /></el-icon>
          <span>知识</span>
        </el-menu-item>
        <el-menu-item index="9" class="flex flex-col mb-[1vw]">
          <el-icon><Refresh /></el-icon>
          <span>自动化</span>
        </el-menu-item>
        <el-menu-item index="10" class="flex flex-col mb-[1vw]">
          <el-icon><User /></el-icon>
        </el-menu-item>
        <el-menu-item index="11" class="flex flex-col mb-[1vw]">
          <el-icon><Grid /></el-icon>
        </el-menu-item>
        <el-menu-item index="12" class="flex flex-col mb-[1vw]">
          <el-icon><Bell /></el-icon>
        </el-menu-item>
        <el-menu-item index="13" class="flex flex-col mb-[1vw]">
          <el-icon><Setting /></el-icon>
        </el-menu-item>
        <el-menu-item index="14" class="flex flex-col mb-[1vw]">
          <el-icon><QuestionFilled /></el-icon>
        </el-menu-item>
        <el-menu-item index="15" class="flex flex-col mb-[1vw]">
          <el-icon><UserFilled /></el-icon>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18" class="content-area">
      <div v-if="activeMenu === '1'">
        <h2>工作台内容</h2>
        <p>这里是工作台的详细信息...</p>
      </div>
      <div v-if="activeMenu === '2'">
        <h2>项目内容</h2>
        <p>这里是项目的详细信息...</p>
      </div>
      <div v-if="activeMenu === '3'">
        <h2>AI内容</h2>
        <p>这里是AI的详细信息...</p>
      </div>
      <div v-if="activeMenu === '4'">
        <h2>事项内容</h2>
        <p>这里是事项的详细信息...</p>
      </div>
      <div v-if="activeMenu === '5'">
        <h2>代码内容</h2>
        <p>这里是代码的详细信息...</p>
      </div>
      <!-- 继续添加其他菜单项对应的内容 -->
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Monitor,
  FolderOpened,
  ChromeFilled,
  Memo,
  Box,
  DCaret,
  Sort,
  Notebook,
  Refresh,
  User,
  Grid,
  Bell,
  Setting,
  QuestionFilled,
  UserFilled,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
