<script lang="ts" setup>
import { useRouter } from "vue-router"

import { useSettingStore } from "@/store/modules/setting"

const settingStore = useSettingStore()
const router = useRouter()

const test = () => {
	settingStore.togglethemeColor()
}
</script>

<template>
	<div>
		<h1>Home</h1>
		<div class="content"></div>
		<el-button type="primary" @click="test">主要按钮</el-button>
	</div>
</template>

<style lang="scss" scoped>
.content {
	box-sizing: content-box;
	width: 100px;
	height: 100px;
	background-color: red;
	border: 10px solid black;
	padding: 10px;
	margin: 10px;
}
</style>
