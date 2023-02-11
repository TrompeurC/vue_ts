import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import Layout from "@/layout/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard"
        }
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})
