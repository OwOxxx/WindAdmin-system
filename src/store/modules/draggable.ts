import { deepClone, uuid, getWidgetComponent, getCurElLocation } from "@/utils"
import { defineStore } from "pinia"

export const useDraggableStore = defineStore("draggable", {
	state: () => ({
		widgetList: [] as Array<Drag.WidgetOption>,
		currentWidget: {} as Drag.WidgetOption,
		formConfig: {},
		formData: {},
		rules: {},
		previewRules: {},
	}),
	getters: {
		getCurrentWidget(state) {
			return state.currentWidget
		},
		getCurrentOptions(state) {
			return state.currentWidget.options
		},
		getCurrentWidgetId(state) {
			return state.currentWidget?.id
		},
	},
	actions: {
		clear() {
			this.widgetList = []
		},
		preview(dialog) {
			console.log(dialog)
			// dialog.value = true
		},
		importJson() {},
		exportJson() {},
		exportCode() {},
		generateSFC() {},
		setCurrentWidget(currentWidget) {
			console.log(currentWidget, this.widgetList, this.formData, this.rules)
			this.currentWidget = currentWidget
		},
		copyCurrentWidget() {
			const { component, ...cur } = this.currentWidget
			const { options, ...attr } = cur
			const { child, ...optionc } = options
			const node = { ...attr, options: { ...optionc, child: [] } }
			const [locationList, i] = getCurElLocation(this.widgetList, this.currentWidget)
			const current = reactive(node)
			locationList.splice(i + 1, 0, {
				id: uuid(),
				component: markRaw(getWidgetComponent(current)),
				options: current.options,
				category: current.category,
				type: current.type,
			})
		},
		deleteCurrentWidget() {
			const [locationList, i] = getCurElLocation(this.widgetList, this.currentWidget)
			locationList.splice(i, 1)
		},
	},
})
