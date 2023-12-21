import router from "@/router"
import { useUserStore } from "@/store/modules/user"
import { usePermissionStore } from "@/store/modules/premission"
const whiteRoutes: string[] = ["/login", "/404", "/403", "/500"]

import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({ showSpinner: false })

export function usePermissionGuard() {
	router.beforeEach(async (to, from) => {
		console.log(to)
		NProgress.start()
		if (whiteRoutes.includes(to.path)) {
			NProgress.done()
			return true
		}
		const userStore = useUserStore()
		const token = userStore.getToken
		if (!token) {
			NProgress.done()
			return {
				path: "/login",
				query: {
					redirect: to.fullPath,
				},
			}
		}
		const userPermissionStore = usePermissionStore()
		if (userPermissionStore.isEmptyPermissionRoute()) {
			await userPermissionStore.initPermissionRoutes()
			return { ...to, replace: true }
		}
		console.log(router.getRoutes())
		return true
	})

	router.afterEach(() => {
		NProgress.done()
	})
}
