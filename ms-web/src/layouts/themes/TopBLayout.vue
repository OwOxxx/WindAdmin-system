<script lang="ts" setup>
import { useSettingStore } from "@/store/modules/setting"
import themeColors from "@/assets/styles/themes/index"
const settingStore = useSettingStore()

import ToolBar from "@/layouts/toolbar/ToolBar.vue"
import MainView from "@/layouts/MainView.vue"
import SideBar from "@/layouts/sidebar/SideBar.vue"
import Avatar from "@/layouts/avatar/Avatar.vue"
import Logo from "@/layouts/logo/Logo.vue"
import TabBar from "@/layouts/tabbar/TabBar.vue"
</script>

<template>
	<div id="container_sub">
		<div class="main_head" :style="{ backgroundColor: themeColors[settingStore.themeColor].menuColor }">
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
		<div class="content">
			<TabBar />
			<MainView />
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
		box-sizing: content-box;
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
}
</style>
