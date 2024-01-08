<template>
	<router-view v-slot="{ Component, route }">
		<Transition :name="settingStore.transitionAnimation">
			<!-- <keep-alive :include="cachedRouteStore.getCachedRouteName"> -->
			<component :is="Component" :key="route.fullPath" />
			<!-- </keep-alive> -->
		</Transition>
	</router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useSettingStore } from "@/store"

export default defineComponent({
	name: "MainView",
	setup() {
		const settingStore = useSettingStore()
		return {
			settingStore,
		}
	},
})
</script>

<style lang="scss" scoped></style>
