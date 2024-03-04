<script lang="ts" setup>
import { computed } from "vue"
import { useSettingStore } from "@/store"

const settingStore = useSettingStore()

const activeMenuBg = computed(() => {
	return settingStore.themeColor
})
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
		font-size: 22px;
		vertical-align: middle;
		&:hover {
			cursor: pointer;
			fill: v-bind(activeMenuBg) !important;
			stroke: v-bind(activeMenuBg) !important;
		}
	}
}
</style>
