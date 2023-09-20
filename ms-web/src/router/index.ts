import { App } from "vue"
import { createRouter, createWebHistory, createWebHashHistory, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router"

const routes = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export function installRouter(app: App) {
	app.use(router)
}

export default router
