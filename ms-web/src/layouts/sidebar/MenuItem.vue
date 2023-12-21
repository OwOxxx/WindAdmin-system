<script lang="ts" setup>
import router from "@/router"
import { ref, onMounted } from "vue"
import { useSettingStore } from "@/store/modules/setting"
import themeColor from "@/assets/styles/themes/index"
import { useVisitedViewStore } from "@/store/modules/view"

const settingStore = useSettingStore()
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
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
				:color="themeColor[settingStore.themeColor].menuTextColor" />
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
.is-active {
	background-color: #409eff !important;
}
</style>
