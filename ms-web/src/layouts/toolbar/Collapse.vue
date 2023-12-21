<script lang="ts" setup>
import { useSettingStore } from "@/store/modules/setting"

const settingStore = useSettingStore()
</script>

<template>
	<div class="collapse">
		<SvgIcon
			:name="settingStore.isCollapse ? 'expand' : 'fold'"
			class="svg-icon"
			@click="settingStore.toggleCollapse" />
	</div>
</template>

<style lang="scss" scoped>
.collapse {
	padding: 0 10px;

	.svg-icon {
		font-size: 25px;
		vertical-align: middle;
		&:hover {
      cursor: pointer;
			fill: #4fa6ff !important;
			stroke: #4fa6ff !important;
		}
	}
}
</style>
