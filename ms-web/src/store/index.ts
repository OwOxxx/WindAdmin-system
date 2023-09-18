import { createPinia } from "pinia"

const pinia = createPinia()

export function installPinia(app) {
	app.use(pinia)
}
