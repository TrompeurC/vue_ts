<template>
  <div>
    <svg-icon icon-class="bug"></svg-icon>
    <el-button @click="sayHi">按钮</el-button>
    <input type="text" />
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"

const sayHi = () => {
  ElMessage.success("sssss")
}
</script>

<style scoped></style>
