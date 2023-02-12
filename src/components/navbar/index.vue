<template>
  <div class="navbar">
    <hambuger @toggleClick="toggleSidebar" :is-active="sidebar.opened" />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app"
import { storeToRefs } from "pinia"

const appStore = useAppStore()
const { sidebar } = storeToRefs(appStore)

const toggleSidebar = () => {
  appStore.toggleSidebar()
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
}
</style>
