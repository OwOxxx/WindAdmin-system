import { defineStore } from "pinia"
import defaultThemeColor from "@/assets/themes/index"
import { hexToRgba } from "@/utils/common/transform"

export const useSettingStore = defineStore("setting", {
	state: () => ({
		isCollapse: false, // 菜单栏展开收缩
		layoutTheme: "classic", // classic, topb
		themeBg: "light", // dark, light
		themeColor: "#1890ff",
		// menuActiveBg: defaultThemeColor[""].menuActiveBg,
	}),
	getters: {
		getMenuActiveBg: state => {
			return hexToRgba(state.themeColor, 0.09)
		},
	},
	actions: {
		setThemeType(layoutTheme: String) {
			this.layoutTheme = layoutTheme
		},
		setThemeBg(themeBg: "dark" | "light") {
			this.themeBg = themeBg
		},
		setIsCollapse(isCollapse: boolean) {
			this.isCollapse = isCollapse
		},
		toggleCollapse() {
			this.isCollapse = !this.isCollapse
		},
		setThemeColorValue(themeColor: string) {
			this.themeColor = themeColor
		},
		setDefaultThemeColor() {
			this.themeColor = defaultThemeColor
		},
	},
	persist: true,
})
