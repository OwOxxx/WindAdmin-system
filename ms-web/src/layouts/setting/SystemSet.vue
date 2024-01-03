<script lang="ts" setup>
import { ref, watchEffect, watch, computed } from "vue"
import { useSettingStore } from "@/store"
import themeColorConfig from "@/assets/themes/themeColor.json"

const settingStore = useSettingStore()
const themeColorList = themeColorConfig.themeColorList
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
						@change="settingStore.setThemeBg"
						style="--el-switch-on-color: #18181c; --el-switch-off-color: #dadada"></el-switch>
				</el-col>
			</el-row>
			<el-row justify="space-between">
				<el-col>
					<el-divider content-position="center">布局模式</el-divider>
				</el-col>
				<el-col style="display: flex; justify-content: center; height: 80px">
					<el-radio-group v-model="settingStore.layoutTheme" @change="settingStore.setThemeType">
						<el-radio label="classic" class="radio" style="height: 100%">
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
						<el-radio label="topb" class="radio">
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
					<ul class="grid grid-cols-8 gap-5">
						<li
							v-for="color in themeColorList"
							:key="color"
							:style="{ 'background-color': color }"
							@click="settingStore.setThemeColorValue(color)"
							:class="settingStore.themeColor === color ? 'b-rd-50% scale-80' : ''"
							class="w-24 h-24 transition-all duration-300 ease-in-out"></li>
					</ul>
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
