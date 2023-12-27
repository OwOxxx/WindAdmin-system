<script lang="ts" setup>
import router from "@/router"
import { ref, onMounted, computed } from "vue"
import { useSettingStore } from "@/store/modules/setting"
import defaultThemeColor from "@/assets/themes/index"
import { useVisitedViewStore } from "@/store/modules/view"

const settingStore = useSettingStore()
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})

const activeMenuBg = computed(() => {
	return settingStore.getMenuActiveBg
})


const setThemeColor = computed(() => {
	return router.currentRoute.value.path === props.item.path
		? settingStore.themeColor
		: defaultThemeColor[settingStore.themeBg].menuTextColor
})

const visitedViewStore = useVisitedViewStore()

const generatorPath = () => {
	// return to.replace(/\/\w+\/\w+\/\w+\//, '/').replace(/\//g, '-')
	return ""
}
const handleClick = item => {
	visitedViewStore.addVisitedView({
		name: item.path,
		title: item.meta ? item.meta.title : item.title,
	})
}
</script>

<template>
	<el-menu-item
		:index="item.path"
		class="menu-item-wrapper"
		@click="handleClick(item)"
		:class="{ 'is-active': router.currentRoute.value.path === item.path }">
		<el-icon>
			<SvgIcon
				:name="item.meta ? item.meta.icon : item.icon"
				class="svg-icon"
				:color="setThemeColor" />
		</el-icon>
		<template #title>
			<span class="title">{{ item.meta ? item.meta.title : item.title }}</span>
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
	margin: 3px 5px;
	border-radius: 4px;
	background-color: v-bind(activeMenuBg);
}
.is-active::before {
	@extend #before;
}

.el-menu-item {
	&:hover::before {
		@extend #before;
	}
}
</style>
