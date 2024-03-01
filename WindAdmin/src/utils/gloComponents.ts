// 注册全局属性等
import { App } from "vue"

// 引入element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// import "element-plus/theme-chalk/dark/css-vars.css"

// 全局导入elementplus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 全局注册组件
import SvgIcon from "@/components/svg-icon/index.vue"

function registerElmentPlus(app: App) {
	app.use(ElementPlus)
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component)
	}
}

function registerComponents(app: App) {
	app.component("SvgIcon", SvgIcon)
}

export default function installGlobal(app: App) {
	registerElmentPlus(app)
	registerComponents(app)
}
