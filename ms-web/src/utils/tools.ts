import { LAYOUT } from "@/store/common"
import { resolve } from "path-browserify"

import { toHump } from "@/utils/index"

export function loadComponents() {
	return import.meta.glob("/src/views/**/*.vue")
}

export const asynComponents = loadComponents()

export function getComponent(it) {
	return asynComponents[getFilePath(it)]
}

export function getFilePath(it) {
	if (!it.localFilePath) {
		it.localFilePath = it?.menuUrl
	}
	it.localFilePath = resolve("/", it.localFilePath)
	return "/src/views" + it.localFilePath + ".vue"
}

export function isMenu(it) {
	if (it.children && it.children.length > 0) return true
}

export function getNameByUrl(menuUrl: string) {
	const temp = menuUrl.split("/")
	return toHump(temp[temp.length - 1])
}

export function generateDynamicRoutes(routes) {
	return routes.map(it => {
		const isMenuFlag = isMenu(it)
		let route = {
			path: it.menuUrl,
			name: it.routeName || getNameByUrl(it.menuUrl),
			component: isMenuFlag ? LAYOUT : getComponent(it),
			meta: {
				hidden: !!it.hidden,
				title: it.menuName,
				affix: !!it.affix,
				cacheable: !!it.cacheable,
				icon: it.icon || "menu",
				iconPrefix: it.iconPrefix || "iconfont",
				badge: it.badge,
				isRootPath: !!it.isRootPath,
				isSingle: !!it.isSingle,
			},
		}
		if (it.children && it.children.length > 0) {
			route.children = generateDynamicRoutes(it.children)
		}
		return route
	})
}
