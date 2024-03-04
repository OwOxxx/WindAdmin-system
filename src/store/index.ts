import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
const pinia = createPinia()

export function installPinia(app) {
	pinia.use(piniaPluginPersistedstate)
	app.use(pinia)
}

export * from "./modules"
