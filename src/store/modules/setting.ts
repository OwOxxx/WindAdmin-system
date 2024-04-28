import { defineStore } from "pinia"
import { hexToRgba } from "@/utils"

export const useSettingStore = defineStore("setting", {
	state: () => ({
		drawer_switch: false, // 侧边栏设置开关
		isCollapse: false, // 菜单栏展开收缩
		layoutTheme: "classic", // classic, topb
		themeBg: "light", // dark, light
		themeColor: "#1890ff", // 主题颜色
		transitionAnimation: "zoom-out", // zoom-fade, zoom-out, slide-right, slide-up
	}),
	getters: {
		getMenuActiveBg: state => {
			return (alpha: number = 0.09) => hexToRgba(state.themeColor, alpha)
		},
	},
	actions: {
		// 设置侧边栏
		setDrawerSwitch(drawer_switch: boolean) {
			this.drawer_switch = drawer_switch
		},
		// 设置布局类型
		setThemeType(layoutTheme: String) {
			this.layoutTheme = layoutTheme
		},
		// 切换主题背景
		setThemeBg(themeBg: "dark" | "light") {
			this.themeBg = themeBg
		},
		// 设置菜单展开收缩
		setIsCollapse(isCollapse: boolean) {
			this.isCollapse = isCollapse
		},
		// 切换菜单展开收缩
		toggleCollapse() {
			this.isCollapse = !this.isCollapse
		},
		// 设置主题颜色
		setThemeColorValue(themeColor: string) {
			this.themeColor = themeColor
			document.documentElement.style.setProperty("--theme-color", themeColor)
			document.documentElement.style.setProperty("--menu-color-hover", this.getMenuActiveBg(0.3))
			document.documentElement.style.setProperty("--tabbar-color-hover", this.getMenuActiveBg(0.2))
			document.documentElement.style.setProperty("--draggable-color-hover", this.getMenuActiveBg(0.1))
		},
		// 设置默认主题颜色
		setDefaultThemeColor() {},
	},
	persist: true,
})
