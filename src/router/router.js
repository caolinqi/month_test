import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: () => import("../view/Login/Loginpage.vue") },
  {
    path: "/layout",
    component: () => import("../components/layout/layout.vue"),
    children: [
      {
        path: "workbench",
        component: () => import("../view/home/Workbench.vue"),
      },
      {
        path: "project",
        component: () => import("../view/home/Project.vue"),
      },
      {
        path: "matter",
        component: () => import("../view/home/Matter.vue"),
      },
      {
        path: "ai",
        component: () => import("../view/home/AI.vue"),
      },
      {
        path: "code",
        component: () => import("../view/home/Code.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
