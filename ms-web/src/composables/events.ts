import { effectScope, watch, onMounted, onUnmounted } from "vue"

// 全局
export function useEvents() {
	const scope = effectScope()
	scope.run(() => {})
}

// event.js
export function useEventListener(target, event, callback) {
	// 如果你想的话，
	// 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
	onMounted(() => {
		// 判断target是否为dom对象
		if (!(target instanceof HTMLElement)) {
			target = document.querySelector(target)
		}
		target.addEventListener(event, callback)
	})
	onUnmounted(() => target.removeEventListener(event, callback))
}
