<script setup lang="ts">
import { ref, computed, onMounted } from "vue"

import { useRouter } from "vue-router"

import { useSettingStore } from "@/store"

const settingStore = useSettingStore()

const mode = computed(() => {
	if (settingStore.layoutTheme === "classic") {
		return "vertical"
	} else if (settingStore.layoutTheme === "topb") {
		return "horizontal"
	}
})

const handleOpen = (key: string, keyPath: string[]) => {
	// console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	// console.log(key, keyPath)
}

// const activeMenu = ref('/index/home')
const router = useRouter()

const activeMenu = computed(() => {
	return router.currentRoute.value.path
})

onMounted(() => {})
</script>

<template>
	<el-scrollbar>
		<el-menu
			:default-active="activeMenu"
			:unique-opened="true"
			:collapse="settingStore.isCollapse"
			@open="handleOpen"
			@close="handleClose"
			:mode="mode"
			:collapse-transition="false"
			:ellipsis="false"
			popper-effect="dark">
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
	transition: all 0.3s;
	.el-sub-menu {
		background: inherit !important;
	}
	.el-menu-item {
		background: inherit !important;
	}
}
</style>
