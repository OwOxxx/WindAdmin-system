<script lang="ts" setup>
import { computed } from "vue"
import { useVisitedViewStore } from "@/store"
const visitedViewStore = useVisitedViewStore()

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})

const setThemeColor = computed(() => {
	return visitedViewStore.breadcrumbList.some(item => item.path === props.item.path)
		? "var(--theme-color)"
		: "var(--text-color)"
})
</script>

<template>
	<el-sub-menu :index="item.path" :popper-offset="3" popper-class="sub-menu-popper">
		<template #title>
			<el-icon>
				<SvgIcon :name="item.icon" class="svg-icon" :color="setThemeColor" />
			</el-icon>
			<span class="title" :style="{ color: setThemeColor }">
				{{ item.title }}
			</span>
		</template>
		<slot></slot>
	</el-sub-menu>
</template>

<style lang="scss" scoped>
.svg-icon {
	font-size: 18px;
	vertical-align: middle;
}

#before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	margin: 4px 8px;
	border-radius: 5px;
	background-color: var(--menu-color-hover);
}

:deep(.el-sub-menu__title) {
	&:hover::before {
		@extend #before;
	}
}
</style>
