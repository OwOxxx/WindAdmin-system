import { defineStore } from "pinia"

import { UserState } from "@/store/types"

import Avatar from '@/assets/img_avatar.gif'

const defaultAvatar = Avatar

export const useUserStore = defineStore("user", {
	state: () => ({
		token: "",
    userId: 0,
    roleId: 0,
    userName: "",
    nickName: "",
    avatar: "",
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
		saveUser(userInfo: UserState) {
			return new Promise<UserState>(resolve => {
				this.userId = userInfo.userId
				this.roleId = userInfo.roleId
				this.token = userInfo.token
				this.userName = userInfo.userName
				this.nickName = userInfo.nickName
				this.avatar = userInfo.avatar || defaultAvatar
				resolve(userInfo)
			})
		},
		setToken(token) {
			this.token = token
		},
		setUserInfo(userInfo) {
			this.userInfo = userInfo
		},
		setRoles(roles) {
			this.roles = roles
		},
		setRoutes(routes) {
			this.routes = routes
		},
	},
	persist: true,
})
