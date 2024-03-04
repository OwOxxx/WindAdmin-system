<script lang="ts" setup>
import SystemSet from "@/layouts/setting/SystemSet.vue"
import { useSettingStore } from "@/store"
import defaultThemeColor from "@/assets/themes/index"
import { toggle } from "@/utils/common/fullscreen"
import { ref, computed } from "vue"

const openSet = ref(false)
const settingStore = useSettingStore()
const closeSet = () => {
	openSet.value = false
}

const activeMenuBg = computed(() => {
	return settingStore.themeColor
})
</script>

<template>
	<div class="tools">
		<SvgIcon
			name="search2"
			class="fs20"
			:color="
				settingStore.layoutTheme == 'classic'
					? '#000'
					: defaultThemeColor[settingStore.themeBg].iconColor
			" />
		<SvgIcon
			name="notification1"
			class="fs20"
			:color="
				settingStore.layoutTheme == 'classic'
					? '#000'
					: defaultThemeColor[settingStore.themeBg].iconColor
			" />
		<SvgIcon
			name="refresh"
			class="fs20"
			:color="
				settingStore.layoutTheme == 'classic'
					? '#000'
					: defaultThemeColor[settingStore.themeBg].iconColor
			" />
		<SvgIcon
			@click="toggle"
			name="screenfull"
			class="fs20"
			:color="
				settingStore.layoutTheme == 'classic'
					? '#000'
					: defaultThemeColor[settingStore.themeBg].iconColor
			" />
		<SvgIcon
			@click="settingStore.setDrawerSwitch(true)"
			name="setting"
			class="fs20"
			:color="
				settingStore.layoutTheme == 'classic'
					? '#000'
					: defaultThemeColor[settingStore.themeBg].iconColor
			" />
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
		fill: v-bind(activeMenuBg) !important;
		stroke: v-bind(activeMenuBg) !important;
	}
}
</style>
