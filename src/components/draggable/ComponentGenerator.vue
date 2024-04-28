<script lang="ts" setup>
import { useDraggableStore } from "@/store"

defineOptions({
	name: "ComponentGenerator",
})

const props = defineProps({
	widgetList: {
		type: Array<Drag.WidgetOption>,
		required: true,
	},
})

const draggableStore = useDraggableStore()
</script>

<template>
	<div v-for="it in props.widgetList" :key="it.id">
		<template v-if="it.category === 'container'">
			<div class="container-grid">
				<ComponentGenerator :widget-list="it.options.child" />
			</div>
		</template>
		<template v-else>
			<component :is="it.component"></component>
		</template>
	</div>
</template>

<style lang="scss" scoped></style>
