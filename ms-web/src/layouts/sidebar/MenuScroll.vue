<script setup lang="ts">
import themeColors from "@/assets/styles/themes/index"

import { ref, computed, onMounted } from "vue"

import { useRouter } from "vue-router"

import { useSettingStore } from "@/store/modules/setting"
import { usePermissionStore } from "@/store/modules/premission"
import { findRootPathRoute } from "@/utils/tools"
import { useVisitedViewStore } from "@/store/modules/view"

const settingStore = useSettingStore()
const permissionStore = usePermissionStore()
const visitedViewStore = useVisitedViewStore()

const mode = computed(() => {
	if (settingStore.theme === "classic") {
		return "vertical"
	} else if (settingStore.theme === "topb") {
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
console.log(themeColors)
onMounted(() => {})
</script>

<template>
	<el-scrollbar>
		<el-menu
			:default-active="activeMenu"
			:collapse="visitedViewStore.isCollapse"
			@open="handleOpen"
			@close="handleClose"
			:mode="mode"
			:collapse-transition="false"
			:ellipsis="false"
			popper-effect="dark"
			:background-color="themeColors[settingStore.themeColor].menuColor"
			:text-color="themeColors[settingStore.themeColor].menuTextColor"
			:active-text-color="themeColors[settingStore.themeColor].menuActiveTextColor"
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

:deep(.el-menu),
.el-menu {
	.el-sub-menu__title {
		&:hover {
			background-color: $activeTextColor;
		}
	}
	.el-menu-item {
		&:hover {
			background-color: $activeTextColor;
		}
	}

	width: 100%;
	height: 100%;
	border: none;
	background: transparent;
}

:deep(.el-menu--horizontal) {
	height: $head-height - 1px;
}
</style>
