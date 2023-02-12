<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">navbar</div>
        <div class="tags-view">tags-view</div>
      </div>
      <div class="app-main">
        <!-- <h2>app main</h2>
        <router-view></router-view> -->
        <app-main />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import siderbar from "./components/sidebar/index.vue"
import Appmain from "./components/app-main/index.vue"
</script>

<style scoped lang="scss">
.app-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
      }
    }
  }
}
</style>
