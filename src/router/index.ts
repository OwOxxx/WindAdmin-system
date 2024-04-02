import { App } from "vue"
import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
	onBeforeRouteLeave,
	onBeforeRouteUpdate,
} from "vue-router"
// router守卫
import useGuard from "@/router/guard"

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

export async function installRouter(app: App) {
	console.log(12412)
	app.use(router)
	useGuard()
	await router.isReady()
}

export default router
