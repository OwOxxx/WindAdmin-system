import { defineStore } from "pinia"

export const useSettingStore = defineStore("setting", {
	state: () => ({
		isCollapse: false, // 菜单栏展开收缩
		theme: "topb", // classic, topb
		themeColor: "dark", // dark, light
	}),
	getters: {
		getTheme() {
			return this.theme
		},
	},
	actions: {
		setThemeType(theme: String) {
			this.theme = theme
		},
		setThemeColor(themeColor: "dark" | "light") {
			this.themeColor = themeColor
		},
		setIsCollapse(isCollapse: boolean) {
			this.isCollapse = isCollapse
		},
		toggleCollapse() {
			this.isCollapse = !this.isCollapse
		},
	},
	persist: true,
})
