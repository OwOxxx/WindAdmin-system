import { nextTick, onMounted, onUnmounted, ref } from "vue"
import { useEventListener } from "@/composables"

const tabNavRef = ref(null)
const menu = ref(null)
export const currentMenu = ref(null)

// 设置tabbar的滚动
export function useTabBarEvent() {
	onMounted(() => {
		menu.value = document.querySelector("#context-menu")
		tabNavRef.value = document.querySelectorAll(".el-tabs__nav")
		tabNavRef.value.forEach(item => {
			item.addEventListener("wheel", wheelListener)
			item.addEventListener("contextmenu", contextMenuListener)
			window.addEventListener("click", hideContextMenu)
		})
	})
	onUnmounted(() => {
		tabNavRef.value.forEach(item => {
			item.removeEventListener("wheel", wheelListener)
			item.removeEventListener("contextmenu", contextMenuListener)
			window.addEventListener("click", hideContextMenu)
		})
	})

	function wheelListener(event) {
		const parentWidth = this.parentNode.offsetWidth
		const barWidth = this.offsetWidth
		if (barWidth < parentWidth) return
		// 获取translateX的值
		const translateX = Number(this.style.transform.replace(/[^0-9]/g, ""))
		// 获取滚动的距离
		const distance = event.wheelDelta
		let num = distance - translateX
		// 限制滚动范围
		if (num >= 0) {
			this.style.transform = `translateX(0px)`
			return
		} else if (num <= -barWidth + parentWidth) {
			this.style.transform = `translateX(${-barWidth + parentWidth - 15}px)`
			return
		}
		// 判断
		if (event.wheelDelta > 0) {
			// 向右滚动
			this.style.transform = `translateX(${num}px)`
		} else {
			// 向左滚动
			this.style.transform = `translateX(${num}px)`
		}
	}

	function contextMenuListener(event) {
		if (event.target !== this) {
			event.preventDefault()
			let target = event.target
			currentMenu.value = target.id?.replace("tab-", "")
			let pageX = event.pageX + 6,
				pageY = event.pageY
			menu.value.style.left = pageX + "px"
			menu.value.style.top = pageY + "px"
			menu.value.style.display = "block"
		}
	}

	function hideContextMenu(event) {
		menu.value.style.display = "none"
	}
}
