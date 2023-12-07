<script lang="ts" setup>
import SystemSet from "@/layouts/setting/SystemSet.vue"
import { useSettingStore } from "@/store/modules/setting"
import themeColors from "@/assets/styles/themes/index"
import { toggle } from "@/utils/common/fullscreen"
import { ref } from "vue"

const openSet = ref(false)
const settingStore = useSettingStore()
const closeSet = () => {
	openSet.value = false
}
</script>

<template>
	<div class="tools">
		<SvgIcon
			name="search2"
			class="fs20"
			:color="settingStore.theme == 'classic' ? '#000' : themeColors[settingStore.themeColor].iconColor" />
		<SvgIcon
			name="notification1"
			class="fs20"
			:color="settingStore.theme == 'classic' ? '#000' : themeColors[settingStore.themeColor].iconColor" />
		<SvgIcon
			name="refresh"
			class="fs20"
			:color="settingStore.theme == 'classic' ? '#000' : themeColors[settingStore.themeColor].iconColor" />
		<SvgIcon
			@click="toggle"
			name="screenfull"
			class="fs20"
			:color="settingStore.theme == 'classic' ? '#000' : themeColors[settingStore.themeColor].iconColor" />
		<SvgIcon
			@click="openSet = true"
			name="setting"
			class="fs20"
			:color="settingStore.theme == 'classic' ? '#000' : themeColors[settingStore.themeColor].iconColor" />
	</div>
	<SystemSet @closeSet="closeSet" :isOpen="openSet" />
</template>

<style lang="scss" scoped>
.tools {
	display: flex;
	align-items: center;
	gap: 25px;
	width: 100%;
	height: 100%;
}

.fs20 {
	cursor: pointer;
	font-size: 20px;
}
</style>
