<template>
  <div>登录</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import axios from "@/utils/axios";

onMounted(async () => {
  const res = await axios.get("/user/getOne");
  console.log("res", res);
});
</script>
<style lang="scss" scoped></style>
