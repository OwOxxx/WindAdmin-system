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
import AppLoading from "./components/common/app-loading.vue"

async function setupApp() {
	const appLoading = createApp(AppLoading)
	appLoading.mount("#app-loading")
	const app = createApp(App)
	installPinia(app)
	await installRouter(app)
	installGlobal(app)
	useMock()
	appLoading.unmount()
	app.mount("#app")
}

setupApp()
