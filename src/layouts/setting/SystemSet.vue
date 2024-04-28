<script lang="ts" setup>
import { ref, watchEffect, watch, computed } from "vue"
import { useSettingStore } from "@/store"
import themeColorConfig from "@/assets/themes/themeColor.json"
import OtherColor from "@/assets/themes/color.json"
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark({
	selector: "html",
	attribute: "color-scheme",
	valueLight: "light",
	valueDark: "dark",
})
isDark.value = false
const toggleDark = useToggle(isDark)

const colorDialogV = ref(false)
const activeTab = ref("红色系")
const settingStore = useSettingStore()
const themeColorList = themeColorConfig.themeColorList
const animateModeList = [
	{
		value: "fade-slide",
		label: "滑动",
	},
	{
		value: "fade",
		label: "消退",
	},
	{
		value: "fade-bottom",
		label: "底部消退",
	},
	{
		value: "fade-scale",
		label: "缩放消退",
	},
	{
		value: "zoom-fade",
		label: "渐变",
	},
	{
		value: "zoom-out",
		label: "闪现",
	},
]
</script>

<template>
	<el-drawer v-model="settingStore.drawer_switch" size="300">
		<template #header>
			<h4>System Setting</h4>
		</template>
		<template #default>
			<el-row justify="space-between" align="middle">
				<el-col :span="10">
					<span>主题颜色</span>
				</el-col>
				<el-col :span="6">
					<el-switch
						v-model="settingStore.themeBg"
						active-value="dark"
						inactive-value="light"
						active-action-icon="Moon"
						inactive-action-icon="Sunny"
						@change="toggleDark()"
						style="--el-switch-on-color: #18181c; --el-switch-off-color: #dadada"></el-switch>
				</el-col>
			</el-row>
			<el-row justify="space-between">
				<el-col>
					<el-divider content-position="center">布局模式</el-divider>
				</el-col>
				<el-col style="display: flex; justify-content: center; height: 80px">
					<el-radio-group v-model="settingStore.layoutTheme" @change="settingStore.setThemeType">
						<el-radio value="classic" class="radio" style="height: 100%">
							<el-row style="height: 40px; width: 50px">
								<el-col
									:span="6"
									style="background-color: black; border-radius: 5px 0 0 5px"></el-col>
								<el-col
									:span="18"
									style="background-color: #6d6d6d; border-radius: 0 5px 5px 0"></el-col>
							</el-row>
							<el-row justify="center">左右</el-row>
						</el-radio>
						<el-radio value="topb" class="radio">
							<el-row style="height: 40px; width: 50px">
								<el-col
									:span="24"
									style="
										background-color: rgb(231, 231, 231);
										border-radius: 5px 5px 0 0;
										height: 33%;
									"></el-col>
								<el-col
									:span="24"
									style="
										background-color: #575757;
										border-radius: 0 0 5px 5px;
										height: 67%;
									"></el-col>
							</el-row>
							<el-row justify="center">上下</el-row>
						</el-radio>
					</el-radio-group>
				</el-col>
			</el-row>
			<el-row justify="space-between">
				<el-col>
					<el-divider content-position="center">系统主题</el-divider>
				</el-col>
				<el-col>
					<ul class="grid grid-cols-8 gap-5 justify-items-center">
						<li
							v-for="color in themeColorList"
							:key="color"
							:style="{ 'background-color': color }"
							@click="settingStore.setThemeColorValue(color)"
							:class="settingStore.themeColor === color ? 'b-rd-50% scale-80' : ''"
							class="w-24 h-24 transition-all duration-300 ease-in-out"></li>
					</ul>
				</el-col>
				<el-col>
					<el-button plain class="w-full mt-10" @click="colorDialogV = true">更多颜色</el-button>
					<el-dialog v-model="colorDialogV" title="中国传统颜色" class="!w-640 h-480">
						<el-tabs v-model="activeTab" class="demo-tabs">
							<el-tab-pane
								:label="item.label"
								:name="item.label"
								v-for="item in OtherColor"
								:key="item.label">
								<ul class="grid grid-cols-8 gap-10 justify-items-center">
									<li
										v-for="it in item.data"
										:key="it.color"
										@click="settingStore.setThemeColorValue(it.color)">
										<div
											class="w-60 h-36 b-rd-5 relative"
											:style="{ 'background-color': it.color }">
											<SvgIcon
												v-if="settingStore.themeColor === it.color"
												:name="'tick'"
												class="font-size-24 absolute top-50% left-50% translate-x--50% translate-y--50%"
												:color="'#fff'" />
										</div>
										<p class="text-center">{{ it.label }}</p>
									</li>
								</ul>
							</el-tab-pane>
						</el-tabs>
					</el-dialog>
				</el-col>
			</el-row>
			<el-row justify="space-between" class="mt-10">
				<el-col :span="12">
					<span>页面切换动画类型</span>
				</el-col>
				<el-col :span="10">
					<el-select
						v-model="settingStore.transitionAnimation"
						class="m-2"
						placeholder="Select"
						size="small">
						<el-option
							v-for="item in animateModeList"
							:key="item.value"
							:label="item.label"
							:value="item.value" />
					</el-select>
				</el-col>
			</el-row>
		</template>
		<template #footer></template>
	</el-drawer>
</template>

<style lang="scss" scoped>
:deep(.radio) {
	display: flex;
	flex-flow: column-reverse nowrap;
	justify-content: center;
	align-items: center;
	gap: 5px;
	.el-radio__label {
		padding-left: 0 !important;
	}
}
</style>
