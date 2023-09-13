import { createApp } from "vue"

import App from "./App.vue"
import "./assets/css/common.scss"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import 'element-plus/theme-chalk/dark/css-vars.css'

// 全局导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.use(ElementPlus)

app.mount("#app")
