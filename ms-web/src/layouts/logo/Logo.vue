<script lang="ts" setup>
import { useVisitedViewStore } from "@/store/modules/view"
import { useSettingStore } from "@/store/modules/setting"
import themeColors from "@/assets/styles/themes/index"
const settingStore = useSettingStore()

const visitedViewStore = useVisitedViewStore()
</script>

<template>
	<div class="Logo">
		<div class="logo-img">
			<img src="@/assets/images/logo2.png" alt="" />
		</div>
		<div class="title" v-if="!visitedViewStore.isCollapse">
			<h3 :style="{ color: themeColors[settingStore.themeColor].menuTextColor }">Vue-Admin</h3>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.Logo {
	overflow: hidden;
	height: $head-height;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;

	.logo-img {
		height: 100%;

		img {
			height: 100%;
			width: 100%;
		}
	}

	.title {
		padding: 0 10px;
	}
}
</style>
