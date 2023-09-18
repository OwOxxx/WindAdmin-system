// 注册全局属性等
import { App } from "vue"
// 全局样式
import "@/assets/css/common.scss"

// 引入element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

// 全局导入elementplus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

function registerElmentPlus(app: App) {
	app.use(ElementPlus)
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component)
	}
}

export default function useGlobal(app: App) {
	registerElmentPlus(app)
}
