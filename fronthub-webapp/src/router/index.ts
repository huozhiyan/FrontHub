import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { App } from "vue";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/reg",
    component: () => import("@/views/login/reg.vue"),
  },
  {
    path: "/home",
    component: () => import("@/layout/default.vue"),
    redirect: "/home/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        name: "users",
        path: "users",
        component: () => import("@/views/users/index.vue"),
      },
      {
        name: "menus",
        path: "menus",
        component: () => import("@/views/menus/index.vue"),
      },
      {
        name: "roles",
        path: "roles",
        component: () => import("@/views/roles/index.vue"),
      },
    ],
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
