<script lang="ts" setup>
import { ref, computed, watch } from "vue"
import { useRouter } from "vue-router"
import { useVisitedViewStore, useSettingStore } from "@/store"

const router = useRouter()
const settingStore = useSettingStore()
const visitedViewStore = useVisitedViewStore()

const activeTableTabsValue = ref("/index/home")

const activeMenuBg = computed(() => {
	return settingStore.getMenuActiveBg(0.1)
})

const activeColor = computed(() => {
	return settingStore.themeColor
})

watch(
	router.currentRoute,
	newValue => {
		activeTableTabsValue.value = newValue.path
	},
	{ immediate: true }
)

const removeTab = (targetName: string) => {
	console.log(targetName)
	const tabs = visitedViewStore.visitedViewList
	let activeName = activeTableTabsValue.value
	if (activeName === targetName) {
		tabs.forEach((tab, index) => {
			if (tab.name === targetName) {
				const nextTab = tabs[index + 1] || tabs[index - 1]
				if (nextTab) {
					activeName = nextTab.name
				}
			}
		})
	}
	router.push(activeName)
	visitedViewStore.removeVisitedView(targetName)
}

const changeTab = (targetName: string) => {
	router.push(targetName)
}
</script>

<template>
	<div class="tab-bar">
		<el-tabs
			v-model="activeTableTabsValue"
			type="card"
			class="tabbar"
			@tab-remove="removeTab"
			@tab-change="changeTab">
			<el-tab-pane
				v-for="item in visitedViewStore.visitedViewList"
				:key="item.name"
				:label="item.title"
				:name="item.name"
				:closable="item.title !== '主控台'"></el-tab-pane>
		</el-tabs>
	</div>
</template>

<style lang="scss" scoped>
:deep(.tabbar) {
	.el-tabs__header {
		height: $tabs-height;
		margin: 0;

		.el-tabs__nav-wrap {
			height: 100%;

			.el-tabs__nav-scroll {
				width: 100%;
				height: 100%;
				padding: 0 10px;
				display: flex;
				align-items: center;
				overflow: hidden;

				.el-tabs__nav {
					border: none;
					gap: 10px;

					.el-tabs__item {
						height: 30px;
						font-size: 12px;
						border-radius: 5px;
						background-color: v-bind(activeMenuBg);
						border: none;
						&:hover {
							color: v-bind(activeColor);
						}
					}
					.is-active {
						color: v-bind(activeColor);
					}
				}
			}
		}
	}
}
</style>
