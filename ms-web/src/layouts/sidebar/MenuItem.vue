<script lang="ts" setup>
import router from "@/router"
import { ref, onMounted, computed } from "vue"
import { useSettingStore, useVisitedViewStore } from "@/store"
import defaultThemeColor from "@/assets/themes/index"
import { isExternal } from "@/utils"

const settingStore = useSettingStore()
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
	return router.currentRoute.value.path === props.item.path
		? settingStore.themeColor
		: defaultThemeColor[settingStore.themeBg].menuTextColor
})

const visitedViewStore = useVisitedViewStore()

const handleClick = item => {
	if (!isExternal(item.path)) {
		router.push({ path: item.path })
		visitedViewStore.addVisitedView({
			name: item.path,
			title: item.title,
		})
	} else {
		window.open(item.path)
	}
}
</script>

<template>
	<el-menu-item
		:index="item.path"
		@click="handleClick(item)"
		:class="{ 'is-active': router.currentRoute.value.path === item.path }">
		<el-icon>
			<SvgIcon :name="item.icon" class="svg-icon" :color="setThemeColor" />
		</el-icon>
		<template #title>
			<span class="title">{{ item.title }}</span>
		</template>
	</el-menu-item>
</template>

<style lang="scss" scoped>
.svg-icon {
	font-size: 18px;
	width: 18px;
	height: 18px;
	vertical-align: middle;
}

.el-menu-item:hover {
	background-color: transparent !important;
}

#before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	margin: 3px 8px;
	border-radius: 5px;
	background-color: v-bind(activeMenuBg);
}
.is-active::before {
	@extend #before;
}
.is-active {
	color: v-bind(setThemeColor);
}

.el-menu-item {
	height: 50px;
	&:hover::before {
		@extend #before;
	}
}
</style>
