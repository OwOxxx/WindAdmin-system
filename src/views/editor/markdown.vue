<script lang="ts" setup>
import { ref, onMounted } from "vue"
import Vditor from "vditor"
import "vditor/dist/index.css"

const vditor = ref<Vditor | null>(null)

onMounted(() => {
	vditor.value = new Vditor("vditor", {
		after: () => {
			// vditor.value is a instance of Vditor now and thus can be safely used here
			vditor.value!.setValue("Vue Composition API + Vditor + TypeScript Minimal Example")
		},
		fullscreen: {
			index: 80,
		},
	})
})
</script>

<template>
	<div id="container">
		<div id="vditor" style="width: 100%;height: 100% !important;"/>
	</div>
</template>

<style lang="scss" scoped>
#container {
  padding: 30px 0;
	height: calc(100vh - $head-height - $tabHeight - 24px);
}
</style>
