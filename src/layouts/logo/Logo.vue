<script lang="ts" setup>
import { useSettingStore } from "@/store"
const settingStore = useSettingStore()
</script>

<template>
	<div class="Logo">
		<div class="logo-img">
			<SvgIcon :name="'logo'" :color="'var(--theme-color)'" class="text-26" />
		</div>
		<div class="title transition duration-300 ease-in-out" v-if="!settingStore.isCollapse">
			<h2 class="text">Admin 管理系统</h2>
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
			color: var(--theme-color);
			@apply text-16px font-bold transition duration-300 ease-in-out;
		}
	}
}
</style>
