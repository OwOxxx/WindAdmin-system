import { effectScope, watch } from "vue"


// 全局
export function useEvents() {
	const scope = effectScope()
	scope.run(() => {})
}
