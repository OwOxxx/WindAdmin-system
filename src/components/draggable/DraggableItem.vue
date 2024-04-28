<script lang="ts" setup>
/**
 * 加一个delay解决子元素点击第一次不触发的问题或者加fallbackTolerance
 */

import draggable from "vuedraggable"
import { useDraggableStore } from "@/store"
import { generateFormRules } from "@/utils"

const draggableStore = useDraggableStore()
const props = defineProps({
	widgetList: {
		type: Array,
		required: true,
	},
	container: {
		type: String,
		default: "",
	},
})
const log = item => {
	console.log(item)
	const { rules, formData, previewRules } = generateFormRules(item.added.element)
	if (item.added) {
		Object.assign(draggableStore.formData, formData)
		Object.assign(draggableStore.rules, rules)
		Object.assign(draggableStore.previewRules, previewRules)
	}
}

const getComponentData = reactive({
	on: {
		change: null,
		input: null,
	},
	attrs: {
		wrap: true,
	},
	props: {
		value: null,
	},
	class: ["list-group", { "container-grid": props.container == "grid" }],
})

const custom_group = reactive({
	name: "componentList",
	put: true,
})
</script>

<template>
	<draggable
		:list="props.widgetList"
		animation="300"
		ghost-class="ghostClass"
		chosen-class="chosenClass"
		dragClass="dragClass"
		forceFallback="true"
		:emptyInsertThreshold="5"
		:group="custom_group"
		fallbackTolerance="2"
		handle=".item_drag"
		@change="log"
		:component-data="getComponentData"
		item-key="id">
		<template #item="{ element }">
			<div
				v-if="element"
				class="list-group-item item_drag"
				@click.stop="draggableStore.setCurrentWidget(element)"
				:class="{ activeBg: element.id === draggableStore.getCurrentWidgetId }">
				<component :is="element.component" :key="element.id"></component>
				<div
					class="drag_tool"
					:class="{ show_drag_tool: element.id === draggableStore.getCurrentWidgetId }">
					<el-button
						@click.stop="draggableStore.copyCurrentWidget()"
						icon="CopyDocument"
						size="small"
						circle
						class="" />
					<el-button
						@click.stop="draggableStore.deleteCurrentWidget()"
						icon="Delete"
						size="small"
						circle
						class="m0!" />
				</div>
			</div>
		</template>
	</draggable>
</template>

<style lang="scss" scoped>
.list-group {
	height: 100%;
	grid-template-rows: auto;
	.list-group-item {
		position: relative;
		border: 1px dashed transparent;
		cursor: move;
		&:hover {
			border: 1px dashed var(--theme-color);
		}
		.show_drag_tool {
			opacity: 1 !important;
		}
		.drag_tool {
			opacity: 0;
			height: 100%;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: -12px;
			top: 0;
			z-index: 99;
		}
	}
	.activeBg {
		background-color: var(--draggable-color-hover);
	}
}

:deep(.ghostClass) {
	background-color: var(--draggable-color-hover) !important;
	backdrop-filter: blur(10px) !important;
}
// :deep(.chosenClass) {
// 	// 变透明
// 	background: rgba(165, 165, 165, 0.521) !important;
// 	backdrop-filter: none !important;
// }
:deep(.dragClass) {
	background-color: var(--draggable-color-hover) !important;
	backdrop-filter: blur(10px) !important;
}
</style>
