import router from "@/router"
import { useUserStore } from "@/store/modules/user"
import { usePermissionStore } from "@/store/modules/premission"
const whiteRoutes: string[] = ["/login", "/404", "/403", "/500"]

export function usePermissionGuard() {
	router.beforeEach(async (to, from) => {
		if (whiteRoutes.includes(to.path)) {
			return true
		}
		const userStore = useUserStore()
		const roles = userStore.getRoles
		const token = userStore.getToken
		if (!token) {
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
			userStore.setRoles(["admin"])
			return { ...to, replace: true }
		}
		return true
	})
}
