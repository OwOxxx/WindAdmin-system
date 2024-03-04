<script setup lang="ts">
import { ref, computed } from "vue"

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})

import MenuItem from "@/layouts/sidebar/MenuItem.vue"
import MenuSub from "@/layouts/sidebar/MenuSub.vue"

const componentId = ref("MenuItem")

const isSub = computed(() => {
	return props.item.children && props.item.children.length !== 0
})

const generatorPath = (path: string) => {
	return path.startsWith("/") ? path : `/${path}`
}
</script>

<template>
	<component :is="isSub ? MenuSub : MenuItem" :item="item">
		<template v-if="item.children && item.children.length !== 0">
			<SideBarItem
				v-for="child of item.children"
				:key="child.path"
				:full-path="generatorPath(child.path)"
				:item="child" />
		</template>
	</component>
</template>

<style lang="scss" scoped></style>
