import { defineStore } from "pinia"

import appconfig from "@/config/appconfig"
import { setDynamicRoutes } from "@/utils/tools"
import router from "@/router"

export const useUserStore = defineStore("user", {
	state: () => ({
		token: "",
		userInfo: {},
		roles: [],
		routes: [],
	}),
	getters: {
		getToken() {
			return this.token
		},
		getUserInfo() {
			return this.userInfo
		},
		getRoles() {
			return this.roles
		},
		getRoutes() {
			return this.routes
		},
	},
	actions: {
		setToken(token: String) {
			this.token = token
		},
		setUserInfo(userInfo: Object) {
			this.userInfo = userInfo
		},
		setRoles(roles: Array<any>) {
			this.roles = roles
		},
		setRoutes(routes: Array<any>) {
			this.routes = routes
		},
		initPermissionRoutes() {
			const tempAccess = setDynamicRoutes(appconfig.routes)
			tempAccess.forEach(item => {
				router.addRoute(item)
			})
			console.log(router.getRoutes())
		},
	},
})
