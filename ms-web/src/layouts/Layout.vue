<script setup lang="ts">
import ClassicTheme from "@/layouts/themes/ClassicTheme.vue"
import TopBLayout from "@/layouts/themes/TopBLayout.vue"
import { useSettingStore } from "@/store/modules/setting"
const settingStore = useSettingStore()
</script>

<template>
	<div id="container">
		<Transition name="fade-transform">
			<template v-if="settingStore.getTheme == 'classic'">
				<ClassicTheme />
			</template>
			<template v-else-if="settingStore.getTheme == 'topb'">
				<TopBLayout />
			</template>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
#container {
	display: flex;
	width: 100%;
	height: 100%;
}

.fade-transform-enter-active,
.fade-transform-leave-active {
	transition: all 0.3s;
}

.fade-transform-enter-from,
.fade-transform-leave-to {
	opacity: 0;
}

.fade-transform-leave-active {
	position: absolute;
}

.fade-transform-enter-active {
	position: absolute;
}
</style>
