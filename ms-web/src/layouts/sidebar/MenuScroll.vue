<script setup lang="ts">
import defaultThemeColor from "@/assets/themes/index"

import { ref, computed, onMounted } from "vue"

import { useRouter } from "vue-router"

import { useSettingStore } from "@/store/modules/setting"

const settingStore = useSettingStore()

const mode = computed(() => {
	if (settingStore.layoutTheme === "classic") {
		return "vertical"
	} else if (settingStore.layoutTheme === "topb") {
		return "horizontal"
	}
})

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}

// const activeMenu = ref('/index/home')
const router = useRouter()

const activeMenu = computed(() => {
	return router.currentRoute.value.path
})

console.log(defaultThemeColor)
onMounted(() => {})
</script>

<template>
	<el-scrollbar>
		<el-menu
			:default-active="activeMenu"
			:collapse="settingStore.isCollapse"
			@open="handleOpen"
			@close="handleClose"
			:mode="mode"
			:collapse-transition="false"
			:ellipsis="false"
			popper-effect="dark"
			:background-color="defaultThemeColor[settingStore.themeBg].menuColor"
			:text-color="defaultThemeColor[settingStore.themeBg].menuTextColor"
			:active-text-color="settingStore.themeColor"
			router>
			<slot></slot>
		</el-menu>
	</el-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.el-menu--horizontal .el-menu--popup) {
	min-width: 100% !important;
}

:deep(.el-scrollbar) {
	box-sizing: content-box !important;
}

:deep(.el-menu--horizontal) {
	height: $head-height - 1px;
}

.el-menu {
	width: 100%;
	height: 100%;
	border: none;
	background: transparent;
	transition: all 0.3s;

	.el-sub-menu {
		background: inherit !important;
	}
	.el-menu-item {
		background: inherit !important;
	}
}
</style>
