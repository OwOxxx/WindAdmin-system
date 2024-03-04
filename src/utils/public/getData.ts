import { watch, computed, effectScope, onScopeDispose } from "vue"
import router from "@/router"
// import { useVisitedViewStore, usePermissionStore } from "@/store"
import { useVisitedViewStore } from "@/store/modules/view"
import { usePermissionStore } from "@/store/modules/premission"

export function useGetBreadcrumbList() {
	const scope = effectScope()

	scope.run(() => {
		const PermissionStore = usePermissionStore()
		const visitedViewStore = useVisitedViewStore()

		watch(
			() => router.currentRoute.value.path,
			() => {
				visitedViewStore.breadcrumbList.length = 0
				generatorList(PermissionStore.permissionRoutes)
			},
			{ immediate: true }
		)
	})

	onScopeDispose(() => {
		scope.stop()
	})
}

function generatorList(Routes: Array<any>) {
	const visitedViewStore = useVisitedViewStore()
	Routes.forEach(item => {
		if (router.currentRoute.value.path.includes(item.path)) {
			visitedViewStore.breadcrumbList.push(item)
			if (item.children) {
				generatorList(item.children)
			}
		}
	})
}
