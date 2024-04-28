<script lang="ts" setup>
import { useDraggableStore } from "@/store"
import { designer } from "@/config"
import { isBoolean, isNumber, isString } from "@/utils"

const draggableStore = useDraggableStore()

const sizes = ["large", "default", "small"]
const position = ["left", "rigth", "top"]
</script>

<template>
	<el-form class="flex-grow-1" size="small" label-width="100" label-position="left">
		<el-form-item v-for="(value, key) in draggableStore.formConfig" :label="designer.setting[key]">
			<template v-if="key == 'size'">
				<el-select v-model="draggableStore.formConfig[key]">
					<el-option v-for="(it, i) in sizes" :label="it" :value="it" :key="i"></el-option>
				</el-select>
			</template>
			<template v-else-if="key == 'labelPosition'">
				<el-select v-model="draggableStore.formConfig[key]">
					<el-option v-for="(it, i) in position" :label="it" :value="it" :key="i"></el-option>
				</el-select>
			</template>
			<template v-else-if="isString(value)">
				<el-input v-model="draggableStore.formConfig[key]"></el-input>
			</template>
			<template v-else-if="isNumber(value)">
				<el-input-number v-model="draggableStore.formConfig[key]"></el-input-number>
			</template>
			<template v-else-if="isBoolean(value)">
				<el-switch v-model="draggableStore.formConfig[key]"></el-switch>
			</template>
		</el-form-item>
	</el-form>
</template>

<style lang="scss" scoped></style>
