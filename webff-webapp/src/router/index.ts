import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { App } from "vue";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/reg",
    component: () => import("@/views/reg.vue"),
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
