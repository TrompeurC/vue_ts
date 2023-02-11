import { ElMessage, ElMessageBox, ElNotification } from "element-plus"
import { App } from "vue"

// 默认自动导入组件插件，只会解析在模板中使用的组件，所以这里需要导入样式
// 这里的样式也可以做到按需导入
// import "element-plus/theme-chalk/el-message.css"
// import "element-plus/theme-chalk/el-notification.css"
// import "element-plus/theme-chalk/el-message-box.css"

export default {
  install(app: App) {
    app.config.globalProperties.$message = ElMessage
    app.config.globalProperties.$notify = ElNotification
    app.config.globalProperties.$confirm = ElMessageBox.confirm
    app.config.globalProperties.$alert = ElMessageBox.alert
    app.config.globalProperties.$prompt = ElMessageBox.prompt
  }
}

// declare module "@vue/runtime-core" {
//   interface ComponentCustomProperties {

//   }
// }
