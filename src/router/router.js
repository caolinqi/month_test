import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: () => import("../view/Login/Loginpage.vue") },
  {
    path: "/layout",
    component: () => import("../components/layout/layout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
