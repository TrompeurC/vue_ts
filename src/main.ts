import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"

// 引入icon插件
import initSvgIcon from "@/icons/index"
import "virtual:svg-icons-register"

// 安装element-plus插件
import installElementPlus from "@/plugins/element"
import pinia from "./store"

createApp(App)
  .use(router)
  .use(initSvgIcon)
  .use(installElementPlus)
  .use(pinia)
  .mount("#app")
