import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({
    top: 0,
  }),
  routes: [
    { path: "/", redirect: { name: "List" } },
    {
      path: "/list",
      name: "List",
      component: Layout,
      meta: { title: "", keepAlive: true },
      redirect: { name: "ListIndex" },
      children: [
        {
          path: "/list",
          name: "ListIndex",
          component: () => import("@/views/list/index.vue"),
          meta: { title: "", keepAlive: true },
        },
      ],
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Layout,
      meta: { title: "", keepAlive: true },
      redirect: { name: "DashboardIndex" },
      children: [
        {
          path: "/dashboard",
          name: "DashboardIndex",
          component: () => import("@/views/dashboard/index.vue"),
          meta: { title: "", keepAlive: true },
        },
      ],
    },
  ],
});

export default router;
