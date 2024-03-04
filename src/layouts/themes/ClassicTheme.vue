<script setup lang="ts">
import defaultThemeColor from "@/assets/themes/index"
import { useSettingStore } from "@/store"
const settingStore = useSettingStore()

import SideBar from "@/layouts/sidebar/SideBar.vue"
import ToolBar from "@/layouts/toolbar/ToolBar.vue"
import MainView from "@/layouts/MainView.vue"
import Avatar from "@/layouts/avatar/Avatar.vue"
import TabBar from "@/layouts/tabbar/TabBar.vue"
import Collapse from "@/layouts/toolbar/Collapse.vue"
import Logo from "@/layouts/logo/Logo.vue"
import Breadcrumb from "@/layouts/breadcrumb/Breadcrumb.vue"
</script>

<template>
	<div id="container_sub">
		<aside
			class="aside"
			:class="[settingStore.isCollapse ? 'close-status' : 'open-status']"
			:style="{ backgroundColor: defaultThemeColor[settingStore.themeBg].menuColor }">
			<div class="aside_head">
				<Logo />
			</div>
			<div class="sidebar_content">
				<SideBar />
			</div>
		</aside>
		<main>
			<div class="main_head">
				<div class="left">
					<Collapse />
					<div class="breadcrumb">
						<Breadcrumb />
					</div>
				</div>
				<div class="middle"></div>
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
		</main>
	</div>
</template>

<style lang="scss" scoped>
#container_sub {
	display: flex;
	width: 100%;
	height: 100%;
}

.open-status {
	width: 210px;
	transition: all 0.3s;
}

.close-status {
	width: 64px;
	transition: all 0.3s;
}

aside {
	height: 100%;
	border-right: 0.5px solid #ebeef5;
	overflow: hidden;

	.aside_head {
		height: $head-height;
	}

	.sidebar_content {
		height: calc(100% - $head-height);
	}
}

main {
	flex: 1;
	overflow: hidden;
	background-color: #fff;

	.main_head {
		display: flex;
		height: $head-height;
		border-bottom: 0.5px solid #ebeef5;

		.left {
			min-width: 210px;
			flex: 1;
			display: flex;
			align-items: center;
		}

		.middle {
			flex: 1;
		}

		.right {
			display: flex;
			margin: 0 20px;
		}
	}

	.content {
		height: calc(100% - $head-height - $tabs-height);
		background-color: #ebeef5;
		overflow: hidden;
		.main_content {
			height: 100%;
			padding: 12px;
		}
	}
}
</style>
