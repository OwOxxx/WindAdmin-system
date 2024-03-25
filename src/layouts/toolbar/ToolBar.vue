<script lang="ts" setup>
import SystemSet from "@/layouts/setting/SystemSet.vue"
import { useSettingStore } from "@/store"
import { toggle } from "@/utils/common/fullscreen"
import { ref, computed } from "vue"

const settingStore = useSettingStore()
</script>

<template>
	<div class="tools">
		<SvgIcon name="search2" class="fs20" />
		<SvgIcon name="notification1" class="fs20" />
		<SvgIcon name="refresh" class="fs20" />
		<SvgIcon @click="toggle" name="screenfull" class="fs20" />
		<SvgIcon @click="settingStore.setDrawerSwitch(true)" name="setting" class="fs20" />
	</div>
	<SystemSet />
</template>

<style lang="scss" scoped>
.tools {
	display: flex;
	align-items: center;
	gap: 15px;
	width: 100%;
	height: 100%;
}

.fs20 {
	cursor: pointer;
	font-size: 20px;
	&:hover {
		fill: var(--theme-color) !important;
		stroke: var(--theme-color) !important;
	}
}
</style>
