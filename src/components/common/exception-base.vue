<template>
	<div class="flex flex-col justify-center items-center gap-24px min-h-520px w-full h-full">
		<div class="flex text-400px">
			<SvgIcon name="no-permission" :color="settingStore.themeColor" v-if="status === '403'" />
			<SvgIcon name="not-found" :color="settingStore.themeColor" v-if="status === '404'" />
			<SvgIcon name="service-error" :color="settingStore.themeColor" v-if="status === '500'" />
		</div>
		<router-link :to="{ name: routeHomePath }">
			<el-button type="primary">回到首页</el-button>
		</router-link>
	</div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store"

const settingStore = useSettingStore()
defineOptions({ name: "ExceptionBase" })

type ExceptionType = "403" | "404" | "500"

interface Props {
	/** 异常类型 403 404 500 */
	status: ExceptionType
}

defineProps<Props>()

const routeHomePath = "home"
</script>
