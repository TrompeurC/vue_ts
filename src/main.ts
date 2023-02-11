import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"

// 引入icon插件
import initSvgIcon from "@/icons/index"
import "virtual:svg-icons-register"

createApp(App)
  .use(router)
  .use(initSvgIcon)
  .use(ElementPlus)
  .use(createPinia())
  .mount("#app")
