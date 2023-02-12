import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import Layout from "@/layout/index.vue"

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/documentation",
    component: Layout,
    redirect: "/documentation/index",
    children: [
      {
        path: "index",
        name: "Documentation",
        component: () =>
          import(
            /* webpackChunkName: "documentation" */ "@/views/documentation/index.vue"
          ),
        meta: {
          title: "Documentation",
          icon: "documentation",
          // hidden: true,
          activeMenu: "/documentation/index"
        }
      }
    ]
  },
  {
    path: "/guide",
    component: Layout,
    redirect: "guide/index",
    children: [
      {
        path: "index",
        name: "Guide",
        component: () =>
          /* webpackChunkName: "guide" */ import("@/views/guide/index.vue"),
        meta: {
          title: "Guide",
          icon: "guide"
        }
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    redirect: "/system/user",
    meta: {
      title: "System",
      icon: "lock",
      alwaysShow: true
      // hidden: true
    },
    children: [
      {
        path: "menu",
        component: () =>
          import(/* webpackChunkName: "menu" */ "@/views/system/menu.vue"),
        meta: {
          title: "Menu ",
          icon: "list"
          // hidden: true
        }
      },
      {
        path: "role",
        component: () =>
          import(/* webpackChunkName: "role" */ "@/views/system/role.vue"),
        meta: {
          title: "Role ",
          icon: "list"
          // hidden: true
        }
      },
      {
        path: "user",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/system/user.vue"),
        meta: {
          title: "User ",
          icon: "list"
        }
      }
    ]
  }
  // {
  //   // 外链路由
  //   path: "/external-link",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "http://www.baidu.com/",
  //       redirect: "/",
  //       meta: {
  //         title: "External Link",
  //         icon: "link"
  //       }
  //     }
  //   ]
  // }
]

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard",
          icon: "dashboard"
        }
      }
    ]
  }
]
export const routes = [...constantRoutes, ...asyncRoutes]
export default createRouter({
  history: createWebHashHistory(),
  routes: routes
})
