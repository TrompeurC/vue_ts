<template>
  <h4 @click="isCollapse = !isCollapse">{{ "展开测试" }}</h4>
  <el-menu
    default-active="activeMenu"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
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
const isCollapse = ref(false)

const route = useRoute()
const menuRoutes = computed(() => routes)
// 根据路径激活当前的菜单
const activeMenu = computed(() => route.path)
</script>

<style scoped lang="scss"></style>
