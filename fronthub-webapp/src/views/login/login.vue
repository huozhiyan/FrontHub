<template>
  <!-- min-height: 100vh; -->
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md">
      <!-- 卡片容器 -->
      <el-card shadow="hover" class="!border-none !bg-white dark:!bg-gray-800">
        <!-- 标题 -->
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
            WebFF 登录
          </h1>
          <p class="text-gray-500 dark:text-gray-400 mt-2">
            请输入您的账号密码登录
          </p>
        </div>

        <!-- 登录表单 -->
        <el-form
          :model="form"
          :rules="rules"
          ref="loginForm"
          @submit.prevent="handleLogin"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>

          <!-- 记住我 + 忘记密码 -->
          <div class="flex justify-between mb-6">
            <el-checkbox v-model="form.remember">记住我</el-checkbox>
            <el-link type="primary">忘记密码？</el-link>
          </div>

          <!-- Tailwind 的间隙工具 -->
          <!-- 登录按钮 -->
          <el-button
            type="primary"
            native-type="submit"
            size="large"
            class="w-full"
            :loading="loading"
          >
            登录
          </el-button>

          <router-link to="/reg">
            <!-- 注册按钮 -->
            <el-button native-type="subit" size="large" class="w-full mt-3">
              注册
            </el-button>
          </router-link>
        </el-form>
      </el-card>

      <!-- 底部版权 -->
      <p class="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 WebFF - 保留所有权利
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { User, Lock, Apple } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

// form 数据
const form = reactive({
  // 用户名
  username: "",
  // 密码
  password: "",
  // 记住我
  remember: false,
});

// 表单验证规则
const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, message: "密码长度至少6位", trigger: "blur" },
  ],
};

// 加载状态
const loading = ref(false);
// DOM 引用
const loginForm = ref(null);

const handleLogin = () => {
  router.push("/home");
  loginForm.value.validate((valid) => {
    if (valid) {
      loading.value = true;
      axios.post("/auth/login", form).then((res) => {
        loading.value = false;
        if (res.data.success) {
          ElMessage({
            message: "登录成功",
            type: "success",
          });
          // 这里可以进行路由跳转或其他操作
        } else {
          ElMessage({
            message: res.data.message || "登录失败",
            type: "error",
          });
        }
      });
    }
  });
};
</script>

<style scoped></style>
