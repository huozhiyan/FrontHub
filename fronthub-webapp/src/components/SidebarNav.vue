<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { PropType } from "vue";
import type { MenuItem } from "./types/SidebarNav";

const props = defineProps({
  menus: {
    type: Array as PropType<MenuItem[]>,
    default: () => [] as MenuItem[],
  },
});

const router = useRouter();

const handleSelect = (key: string) => {
  const item = props.menus.find((menu) => menu.id === key);
  if (item) {
    if (item.routeName) {
      router.push({ name: item.routeName });
    } else if (item.path) {
      router.push(item.path);
    }
  }
};
</script>

<template>
  <el-row class="tac min-h-screen bg-[#545c64]">
    <el-col>
      <h4 class="mb-2 text-center text-white">WebFF</h4>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="(item, index) in menus"
          :key="index"
          :index="item.id"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
