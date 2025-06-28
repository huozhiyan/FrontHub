<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧菜单栏组件 -->
      <el-aside>
        <sidebar-nav :menus="store.menus" />
      </el-aside>
      <el-container>
        <el-header>
          <header-nav />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import SidebarNav from "@/components/SidebarNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { useMenuStore } from "../store/menu";

const store = reactive(useMenuStore());

console.log("store.menus", store.menus);
</script>
<style lang="scss" scoped></style>
