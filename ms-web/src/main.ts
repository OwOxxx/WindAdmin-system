import { createApp } from "vue"

// uno.css
import "virtual:uno.css"
import "./styles"
import App from "./App.vue"
// 使用mock
import useMock from "../mock/index"
// 创建pinia
import { installPinia } from "@/store"
// 全局注册
import installGlobal from "@/utils/gloComponents"
// vue-router
import { installRouter } from "@/router/index"

async function setupApp() {
	const app = createApp(App)
	installPinia(app)
	await installRouter(app)
	installGlobal(app)
	useMock()
	app.mount("#app")
}

setupApp()
