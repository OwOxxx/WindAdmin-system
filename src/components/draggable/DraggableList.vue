<script lang="ts" setup>
import { uuid, getWidgetComponent, deepClone } from "@/utils"
import draggable from "vuedraggable"

const props = defineProps({
	itemList: {
		type: Array,
		required: true,
	},
})

const cloneComponent = (child: Drag.WidgetOption) => {
	const node = deepClone(child) as Drag.WidgetOption
	node.options.prop = uuid()
	const current = reactive(node)
	return {
		id: uuid(),
		component: markRaw(getWidgetComponent(current)),
		options: current.options,
		category: current.category,
		type: current.type,
	}
}

const log = evt => {
	console.log(evt)
}

function getComponentData() {
	return {
		on: {
			change: handleChange,
			input: inputChanged,
		},
		attrs: {
			wrap: true,
		},
		props: {
			value: null,
		},
		class: "list-group",
	}
}

function handleChange() {
	console.log("changed")
}
function inputChanged(value) {
	console.log(value, "inputchanged")
}
</script>

<template>
	<draggable
		v-model="props.itemList"
		animation="300"
		forceFallback="true"
		:component-data="getComponentData()"
		tag="ul"
		:sort="false"
		:group="{
			name: 'componentList',
			pull: 'clone',
			put: false,
		}"
		:clone="cloneComponent"
		@change="log"
		ghost-class="ghostClass"
		chosen-class="chosenClass"
		item-key="id">
		<template #item="{ element }">
			<li class="list-group-item">
				<span>{{ element.name }}</span>
			</li>
		</template>
	</draggable>
</template>

<style lang="scss" scoped>
.list-group {
	margin: 5px 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5px;
	.list-group-item {
		margin: 1%;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: move;
		span {
			width: 100%;
			height: 100%;
			padding: 6px 15px;
			border-radius: 3px;
			background-color: var(--menu-color-hover);
			border: 1px solid transparent;
			&:hover {
				border: 1px dashed #000;
			}
		}
	}
}

// .ghostClass {
// 	background: rgb(0, 0, 0) !important;
// 	backdrop-filter: blur(10px) !important;
// }
// .chosenClass {
// 	// 变透明
// 	background: rgb(141, 141, 141) !important;
// 	backdrop-filter: none !important;
// }
// .dragClass {
// 	background: rgb(180, 145, 219) !important;
// 	backdrop-filter: blur(10px) !important;
// }
</style>
