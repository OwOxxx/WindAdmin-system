<script lang="ts" setup>
import { useDraggableStore } from "@/store"
import { designer } from "@/config"
import { isBoolean, isNumber, isString } from "@/utils"

const draggableStore = useDraggableStore()

const options = computed(() => {
	return draggableStore.currentWidget.options
})
const typeOptions = ["text", "password", "textarea"]
const sizes = ["large", "default", "small"]
</script>

<template>
	<el-form class="flex-grow-1" size="small" label-width="100" label-position="left">
		<el-form-item v-for="(value, key) in options" :label="designer.setting[key]">
			<template v-if="key === 'type'">
				<el-select v-model="options[key]">
					<el-option v-for="(it, i) in typeOptions" :key="i" :value="it" :label="it"></el-option>
				</el-select>
			</template>
			<template v-else-if="key === 'size'">
				<el-select v-model="options[key]">
					<el-option v-for="(it, i) in sizes" :key="i" :value="it" :label="it"></el-option>
				</el-select>
			</template>
			<template v-else-if="isString(value)">
				<el-input v-model="options[key]"></el-input>
			</template>
			<template v-else-if="isNumber(value)">
				<el-input-number v-model="options[key]"></el-input-number>
			</template>
			<template v-else-if="isBoolean(value)">
				<el-switch v-model="options[key]"></el-switch>
			</template>
		</el-form-item>
	</el-form>
</template>

<style lang="scss" scoped></style>
