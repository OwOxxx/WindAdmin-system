import { defineStore } from "pinia"

import { ViewItem } from "../types"

export const useVisitedViewStore = defineStore({
	id: "view",
	state: () => ({
		isCollapse: false, // 菜单栏展开收缩
		visitedViewList: [
			// 默认打开的页面，并且不可关闭
			{
				title: "主控台",
				name: "/index/home",
			},
		],
	}),
	actions: {
		addVisitedView(viewItem: ViewItem) {
			if (this.visitedViewList.some(it => it.name === viewItem.name)) {
				return
			}
			this.visitedViewList.push({
				title: viewItem.title,
				name: viewItem.name,
			})
		},
		removeVisitedView(targetName: string) {
			this.visitedViewList.splice(
				this.visitedViewList.findIndex(it => it.name === targetName),
				1
			)
		},

		toggleCollapse() {
			this.isCollapse = !this.isCollapse
		}
	},
	persist: true,
})
