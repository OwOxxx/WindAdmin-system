<script lang="ts" setup>
import { ref, computed, watch, onMounted, nextTick } from "vue"
import { useRouter } from "vue-router"
import { useVisitedViewStore, useSettingStore } from "@/store"
import { useTabBarEvent, currentMenu } from "@/utils"

const router = useRouter()
const settingStore = useSettingStore()
const visitedViewStore = useVisitedViewStore()

// 鼠标滚轮事件
useTabBarEvent()

const activeTableTabsValue = ref("/index/home")

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
		router.push(activeName)
	}
	visitedViewStore.removeVisitedView(targetName)
}

const changeTab = (targetName: string) => {
	router.push(targetName)
}

const closeTab = (type, event) => {
	if (currentMenu.value === "/index/home" && type === "关闭当前") {
		event.preventDefault()
		event.stopPropagation()
		return
	}
	const tabs = visitedViewStore.visitedViewList
	let newTabs = null
	switch (type) {
		case "关闭当前":
			removeTab(currentMenu.value)
			break

		case "关闭其他":
			newTabs = tabs.filter(it => {
				if (it.name == currentMenu.value || it.name == "/index/home") {
					return it
				}
			})
			visitedViewStore.visitedViewList = newTabs
			router.push(currentMenu.value)
			break

		case "关闭左侧":
			const leftIndex = tabs.findIndex(it => it.name == currentMenu.value)
			newTabs = tabs.filter((it, index) => {
				if (index >= leftIndex || it.name == "/index/home") {
					return it
				}
			})
			visitedViewStore.visitedViewList = newTabs
			router.push(currentMenu.value)
			break

		case "关闭右侧":
			const rightIndex = tabs.findIndex(it => it.name == currentMenu.value)
			newTabs = tabs.filter((it, index) => {
				if (index <= rightIndex || it.name == "/index/home") {
					return it
				}
			})
			visitedViewStore.visitedViewList = newTabs
			router.push(currentMenu.value)
			break

		default:
			break
	}
}
</script>

<template>
	<div class="tab-bar" ref="tabBarRef">
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
		<div id="context-menu" class="hidden p8 b-rd-5 b-5 absolute z-10 bg-#fff cursor-pointer">
			<ul class="flex flex-col gap-5">
				<li
					class="hover:bg-#f5f5f5 pl10 pr10 pt5 pb5"
					:class="{ activeStyle: currentMenu === '/index/home' }"
					@click="closeTab('关闭当前', $event)">
					关闭当前
				</li>
				<li class="hover:bg-#f5f5f5 pl10 pr10 pt5 pb5" @click="closeTab('关闭其他', $event)">
					关闭其他
				</li>
				<li class="hover:bg-#f5f5f5 pl10 pr10 pt5 pb5" @click="closeTab('关闭左侧', $event)">
					关闭左侧
				</li>
				<li class="hover:bg-#f5f5f5 pl10 pr10 pt5 pb5" @click="closeTab('关闭右侧', $event)">
					关闭右侧
				</li>
			</ul>
		</div>
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
						background-color: var(--tabbar-color-hover);
						border: none;
						&:hover {
							color: var(--theme-color);
						}
					}
					.is-active {
						color: var(--theme-color);
					}
				}
			}
		}
	}
}

#context-menu {
	box-shadow: 1px 1px 2px 0px black;
}

.activeStyle {
	cursor: not-allowed;
	color: #b5b1b1 !important;
	&:hover {
		background-color: transparent !important;
	}
}
</style>
