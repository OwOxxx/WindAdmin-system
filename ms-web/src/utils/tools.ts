import { LAYOUT } from "@/store/common"
import { resolve } from "path-browserify"

export function loadComponents() {
	return import.meta.glob("/src/views/**/*.vue")
}

export const asynComponents = loadComponents()

export function getComponent(it) {
	return asynComponents[getFilePath(it)]
}

export function getFilePath(it) {
	if (!it.localFilePath) {
		return
		// it.localFilePath = it?.menuUrl
	}
	it.localFilePath = resolve("/", it.localFilePath)
	return "/src" + it.localFilePath + ".vue"
}

export function isMenu(it) {
	if (it.children && it.children.length > 0) return true
}

export function setDynamicRoutes(routes) {
	console.log(routes)
	return routes.map(item => {
		const isMenuFlag = isMenu(item)
		let route = {
			path: item.path,
			name: item.name,
			component: isMenuFlag ? LAYOUT : getComponent(item) || (() => import("@/views/exception/404.vue")),
		}
		if (item.children && item.children.length > 0) {
			route.children = setDynamicRoutes(item.children)
		}
		return route
	})
}
