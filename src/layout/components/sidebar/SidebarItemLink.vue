<template>
  <component :is="type" v-bind="linkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate"

// 针对路径是外链 就渲染为a标签 如果是正常路由路径 就渲染为 router-link

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
const isExt = computed(() => isExternal(props.to))
const type = computed(() => {
  if (isExt.value) {
    return "a"
  }
  return "router-link"
})
const linkProps = computed(() => {
  if (isExt.value) {
    return {
      // a 标签的一些原生属性
      href: props.to,
      target: "_blank",
      rel: "noopener"
    }
  }
  // router-link只需一个to props
  return {
    to: props.to
  }
})
</script>

<style scoped></style>
