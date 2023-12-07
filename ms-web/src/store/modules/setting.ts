import { defineStore } from "pinia"

export const useSettingStore = defineStore("setting", {
	state: () => ({
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
			console.log(themeColor)
			this.themeColor = themeColor
		},
	},
	persist: true,
})
