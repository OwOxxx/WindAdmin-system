import { defineStore } from "pinia"

import { generateDynamicRoutes } from "@/utils/tools"
import router from "@/router"
import { post } from "@/api/http"
import { getMenuListByRoleId } from "@/api/url"
import { useUserStore } from "@/store/modules/user"

export const usePermissionStore = defineStore("permission", {
	state: () => ({
		permissionRoutes: [],
	}),
	getters: {
		getPermissionSideBar(state) {
      return state.permissionRoutes.filter((it) => {
        return it.meta && !it.meta.hidden
      })
    },
	},
	actions: {
		async getRoutes(data: { userId: number; roleId: number }) {
			try {
				const res = await post({
					url: getMenuListByRoleId,
					data,
				})
				return res.data
			} catch (error) {}
		},
		async initPermissionRoutes() {
			const userStore = useUserStore()
			const accessRoutes = await this.getRoutes({ userId: userStore.userId, roleId: userStore.roleId })
			const tempAccess = generateDynamicRoutes(accessRoutes)
			tempAccess.forEach(item => {
				router.addRoute(item)
			})
			this.permissionRoutes = [...tempAccess]
		},
		isEmptyPermissionRoute() {
			return !this.permissionRoutes || this.permissionRoutes.length === 0
		},
	},
})
