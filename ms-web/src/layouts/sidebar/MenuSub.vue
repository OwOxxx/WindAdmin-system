<script lang="ts" setup>
import { computed } from "vue"
import { useSettingStore, useVisitedViewStore } from "@/store"
import defaultThemeColor from "@/assets/themes/index"
import { useRouter } from "vue-router"

const router = useRouter()

const settingStore = useSettingStore()
const visitedViewStore = useVisitedViewStore()

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})

const activeMenuBg = computed(() => {
	return settingStore.getMenuActiveBg()
})


const setThemeColor = computed(() => {
	return visitedViewStore.breadcrumbList.some(item => item.path === props.item.path)
		? settingStore.themeColor
		: defaultThemeColor[settingStore.themeBg].menuTextColor
})
</script>

<template>
	<el-sub-menu :index="item.path" :popper-offset="3" popper-class="sub-menu-popper">
		<template #title>
			<el-icon>
				<SvgIcon
					:name="item.meta ? item.meta.icon : 'menu-default'"
					class="svg-icon"
					:color="setThemeColor" />
			</el-icon>
			<span class="title" :style="{ color: setThemeColor }">
				{{ item.meta ? item.meta.title : item.title }}
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
	background-color: v-bind(activeMenuBg);
}

:deep(.el-sub-menu__title) {
	&:hover::before {
		@extend #before;
	}
}
</style>
