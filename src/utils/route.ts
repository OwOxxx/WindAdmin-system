import { LAYOUT } from "@/store/common"
import { resolve } from "path-browserify"
import { toHump } from "@/utils"

export function loadComponents() {
	return import.meta.glob("/src/views/**/*.vue")
}

export const asynComponents = loadComponents()

export function getComponent(it) {
	return (
		asynComponents[getFilePath(it)] || asynComponents[getFilePath(it).replace(".vue", "/index.vue")]
	)
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

export function mapTwoLevelRouter(srcRoutes: Array<any>) {
	function addParentRoute(routes: any, parent: any, parentPath: string) {
		routes.forEach(it => {
			if (!isExternal(it.path)) {
				it.path = resolve(parentPath, it.path)
			}
			parent.push(it)
			if (it.children && it.children.length > 0) {
				addParentRoute(it.children, parent, it.path)
			}
		})
	}
	if (srcRoutes && srcRoutes.length > 0) {
		const tempRoutes = []
		srcRoutes.forEach(it => {
			const route = { ...it }
			const parentRoutes = []
			if (route.children && route.children.length > 0) {
				addParentRoute(route.children, parentRoutes, route.path)
			}
			parentRoutes && parentRoutes.length > 0 && (route.children = parentRoutes)
			tempRoutes.push(route)
		})
		return tempRoutes
	}
	return []
}

export function generateDynamicRoutes(routes) {
	console.log(routes)
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
				icon: it.icon || "menu-default",
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

export function transfromMenu(originRoutes) {
	function getLabel(item) {
		return item.meta?.title || item.title
	}
	if (!originRoutes) {
		return []
	}
	const tempMenus = []
	originRoutes
		.filter(it => {
			if (!it.meta) {
				return false
			}
			return !it.meta.hidden
		})
		.forEach(it => {
			const tempMenu = {
				path: it.path,
				title: getLabel(it),
				icon: it.meta ? it.meta.icon : it.icon,
			}
			if (it.children) {
				if (it.meta && it.meta.isSingle && it.children.length === 1) {
					const item = it.children[0]
					tempMenu.path = resolve(tempMenu.path as string, item.path)
					tempMenu.title = item.meta && item.meta.title ? getLabel(item) : tempMenu.title
				} else {
					tempMenu.children = transfromMenu(it.children)
				}
			}
			tempMenus.push(tempMenu)
		})
	return tempMenus
}

export function findRootPathRoute(routes) {
	return routes && routes.length > 0 && routes[0].children && routes[0].children.length > 0
		? routes[0].children![0].path
		: "/"
}

export function isExternal(path: string) {
	return /^(https?:|mailto:|tel:)/.test(path)
}
