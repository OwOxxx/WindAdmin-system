import { isArray, uuid } from "@/utils"
import { designer } from "@/config"

function loadWidget() {
	const widgets = import.meta.glob("/src/components/draggable/widget/**/*.tsx")
	return Object.keys(widgets).reduce((acc, path) => {
		const key = path.match(/\/[\w-]+\.tsx/)[0].replace(/(\/|\.tsx)/g, "")
		acc[key] = widgets[path]
		return acc
	}, {})
}

export const asyncWidgetComponents = loadWidget()

export function byNameGetWidgetCom(name: string) {
	return asyncWidgetComponents[`el-${name}-widget`]
		? defineAsyncComponent(asyncWidgetComponents[`el-${name}-widget`])
		: undefined
}

export function getWidgetComponent(item: Drag.WidgetOption) {
	const com = byNameGetWidgetCom(item.type)
	if (item.category === "isFormItemChild" && com) {
		const vNode = h(com, {
			_config: item.options,
		})
		return h(
			byNameGetWidgetCom("formItem"),
			{
				defaultLabel: item.type,
				_config: item.options,
			},
			() => vNode
		)
	} else if ((item.category === "container" || item.category === "notFormItemChild") && com) {
		return h(com, {
			_config: item.options,
		})
	} else {
		return h(byNameGetWidgetCom("empty"))
	}
}

/**
 * record: 在这里使用嵌套的h函数传入的插槽会每次拖拽或者添加都会重新渲染所有组件,所以需要先执行生成vNode
 */

export function generateDragTemplateList(
	originList: Array<Drag.WidgetOption>
): Array<Drag.WidgetOption> {
	return originList.map(it => {
		return {
			name: designer.widgetLabel[it.type],
			...it,
		}
	})
}

export function getCurElLocation(list: Array<Drag.WidgetOption>, cur: Drag.WidgetOption): any {
	for (let i = 0; i < list.length; i++) {
		const it = list[i]
		if (it.id === cur.id) return [list, i]
		else if (it.options.child && it.options.child.length !== 0) {
			const res = getCurElLocation(it.options.child, cur)
			if (res) return res
		}
	}
}

export function generateFormRules(widget: Drag.WidgetOption): any {
	const rules = {}
	const previewRules = {}
	const formData = {}
	const { validation, validationHint, required, requiredHint, defaultValue } = toRefs(
		widget.options
	)
	rules[widget.options.prop] = [
		{
			validator: (rule, value, callback) => {
				callback()
			},
			required: required,
		},
	]
	previewRules[widget.options.prop] = [
		{
			validator: (rule, value, callback) => {
				if (!required.value) return
				else if (!validation.value) {
					!value && requiredHint.value ? callback(new Error(requiredHint.value)) : callback()
				} else if (validation.value) {
					const regexp = new RegExp(validation.value || / /g)
					regexp.test(value)
						? callback()
						: callback(new Error(validationHint.value || "请输入正确的类型"))
				}
				callback()
			},
			trigger: "blur",
			required: required,
		},
	]
	formData[widget.options.prop] = defaultValue
	return { formData, rules, previewRules }
}

export default {}
