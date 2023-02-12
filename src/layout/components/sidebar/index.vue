<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    :router="true"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
    :collapse="sidebar.opened"
  >
    <sidebar-item
      v-for="route of menuRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    ></sidebar-item>
  </el-menu>
</template>

<script setup lang="ts">
import scssVariables from "@/styles/variables.module.scss"
import SidebarItem from "./SidebarItem.vue"
import { routes } from "@/router/index"
import { useAppStore } from "@/store/app"
import { storeToRefs } from "pinia"

const store = useAppStore()
const { sidebar } = storeToRefs(store)

const route = useRoute()
const menuRoutes = computed(() => routes)
// 根据路径激活当前的菜单
const activeMenu = computed(() => {
  const { path, meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style scoped lang="scss"></style>
