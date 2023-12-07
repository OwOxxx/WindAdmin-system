<script lang="ts" setup>
import { useSettingStore } from "@/store/modules/setting"
import themeColor from "@/assets/styles/themes/index"

const settingStore = useSettingStore()

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<el-sub-menu :index="item.path" :popper-offset="3">
		<template #title>
			<el-icon>
				<SvgIcon :name="item.meta ? item.meta.icon : 'menu-default'" class="svg-icon" :color="themeColor[settingStore.themeColor].menuTextColor" />
			</el-icon>
			<span class="title">{{ item.meta ? item.meta.title : item.title }}</span>
		</template>
		<slot></slot>
	</el-sub-menu>
</template>

<style lang="scss" scoped>
.svg-icon {
	font-size: 18px;
	vertical-align: middle;
}
</style>
