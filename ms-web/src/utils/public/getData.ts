import { watch, computed } from "vue"
import router from "@/router"
import { useVisitedViewStore } from "@/store/modules/view"
import { useSettingStore } from "@/store/modules/setting"
import { usePermissionStore } from "@/store/modules/premission"

const visitedViewStore = useVisitedViewStore()
const PermissionStore = usePermissionStore()
const settingStore = useSettingStore()

export function useGetBreadcrumbList() {
	watch(
		() => router.currentRoute.value.path,
		() => {
			visitedViewStore.breadcrumbList.length = 0
			generatorList(PermissionStore.permissionRoutes)
			console.log(visitedViewStore.breadcrumbList)
		},
		{ immediate: true }
	)
}

function generatorList(Routes: Array<any>) {
	Routes.forEach(item => {
		if (router.currentRoute.value.path.includes(item.path)) {
			visitedViewStore.breadcrumbList.push(item)
			if (item.children) {
				generatorList(item.children)
			}
		}
	})
}
