<script lang="ts" setup>
import { watch } from "vue"
import { useSettingStore } from "@/store"

import defaultThemeColor from "@/assets/themes/index"
const settingStore = useSettingStore()

import ToolBar from "@/layouts/toolbar/ToolBar.vue"
import MainView from "@/layouts/MainView.vue"
import SideBar from "@/layouts/sidebar/SideBar.vue"
import Avatar from "@/layouts/avatar/Avatar.vue"
import Logo from "@/layouts/logo/Logo.vue"
import TabBar from "@/layouts/tabbar/TabBar.vue"

watch(
	() => settingStore.layoutTheme,
	() => {
		if (settingStore.layoutTheme == "topb") {
			console.log("topb")
			settingStore.setIsCollapse(false)
		}
	},
	{ immediate: true }
)
</script>

<template>
	<div id="container_sub">
		<div
			class="main_head"
			:style="{ backgroundColor: defaultThemeColor[settingStore.themeBg].menuColor }">
			<div class="left">
				<Logo />
			</div>
			<div class="middle">
				<SideBar />
			</div>
			<div class="right">
				<ToolBar />
				<Avatar />
			</div>
		</div>
		<TabBar />
		<div class="content">
			<el-scrollbar>
				<div class="main_content">
					<MainView />
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#container_sub {
	width: 100%;
	height: 100%;

	.main_head {
		width: 100vw;
		display: flex;
		height: $head-height;
		border-bottom: 0.5px solid #ebeef5;

		.left {
		}

		.middle {
			flex: 1 1 0%;
			overflow: hidden;
		}

		.right {
			display: flex;
			margin: 0 20px;
		}
	}
	.content {
		width: 100%;
		height: calc(100% - $head-height - $tabs-height);
		background-color: #ebeef5;
		overflow: hidden;
		.main_content {
			height: 100%;
			overflow: auto;
			padding: 12px;
		}
	}
}
</style>
