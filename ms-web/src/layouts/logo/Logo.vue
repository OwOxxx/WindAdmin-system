<script lang="ts" setup>
import { useVisitedViewStore } from "@/store/modules/view"
import { useSettingStore } from "@/store/modules/setting"
import defaultThemeColor from "@/assets/themes/index"
const settingStore = useSettingStore()
</script>

<template>
	<div class="Logo">
		<div class="logo-img">
			<SvgIcon :name="'logo'" :color="settingStore.themeColor" class="text-26" />
		</div>
		<div class="title transition duration-300 ease-in-out" v-if="!settingStore.isCollapse">
			<h2 :style="{ color: settingStore.themeColor }" class="text">Admin 管理系统</h2>
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
		line-height: $head-height;
	}

	.title {
		padding: 0 10px;
		.text {
			@apply text-16px font-bold text-primary transition duration-300 ease-in-out;
		}
	}
}
</style>
