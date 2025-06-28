import { defineStore } from "pinia";
import type { MenuItem } from "../components/types/SidebarNav";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menus: [
      {
        id: "1",
        name: "首页",
        path: "dashboard",
      },
      {
        id: "2",
        name: "用户管理",
        routeName: "users",
      },
      {
        id: "3",
        name: "菜单管理",
        routeName: "menus",
      },
      {
        id: "4",
        name: "角色管理",
        routeName: "roles",
      },
    ] as MenuItem[],
  }),
});
