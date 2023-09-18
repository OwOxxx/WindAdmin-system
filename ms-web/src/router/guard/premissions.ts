import router from "@/router"

import { useUserStore } from "@/store/modules/premission"
const whiteRoutes: string[] = ['/login', '/404', '/403', '/500']

export function usePermissionGuard() {
	router.beforeEach(async (to, from) => {

		if (whiteRoutes.includes(to.path)) {
      return true
    }
		const userStore = useUserStore()
		console.log(userStore)
		const roles = userStore.getRoles
		const token = userStore.getToken
		console.log(roles, token)
		if (!token) {
			return {
				path: "/login",
				query: {
					redirect: to.fullPath,
				},
			}
		}
		if (roles.length == 0) {
			userStore.initPermissionRoutes()
			userStore.setRoles(["admin"])
			console.log(to)
			return { ...to, replace: true }
		}
		return true
	})
}
