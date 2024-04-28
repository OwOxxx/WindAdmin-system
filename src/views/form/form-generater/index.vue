<script lang="ts" setup>
import { containers, basicFields, advancedFields, designer, formConfig } from "@/config"
import { generateDragTemplateList, generateFormRules, byNameGetWidgetCom } from "@/utils"
import { useDraggableStore } from "@/store"

const draggableStore = useDraggableStore()
const FormDrag = byNameGetWidgetCom("formDrag")

// 左侧布局组件库
const activeLeft_origin = ref("components")
const containersList = generateDragTemplateList(containers)
const basicFieldsList = generateDragTemplateList(basicFields)
const advancedFieldsList = generateDragTemplateList(advancedFields)
const handleLeftTabClick = tab => {
	console.log(tab)
}
// 中间表单模板

// 右侧表单或者组件设置
const activeRight_set = ref("componentSet")
draggableStore.formConfig = formConfig
const handleRightTabClick = tab => {
	console.log(tab)
}
</script>

<template>
	<div class="form-generater">
		<el-card class="h-full" shadow="hover">
			<div class="flex h-full flex-row flex-nowrap!">
				<div class="min-w-250 b-r b-r-solid b-r-#e0e0e0">
					<el-tabs v-model="activeLeft_origin" class="h40" @tab-click="handleLeftTabClick">
						<el-tab-pane label="组件库" name="components" class="hfull p10">
							<header>
								<b>{{ designer.containerTitle }}</b>
							</header>
							<DraggableList class="mb-20" :itemList="containersList" />
							<header>
								<b>{{ designer.basicFieldTitle }}</b>
							</header>
							<DraggableList class="mb-20" :itemList="basicFieldsList" />
							<header>
								<b>{{ designer.advancedFieldTitle }}</b>
							</header>
							<DraggableList class="mb-20" :itemList="advancedFieldsList" />
						</el-tab-pane>
						<el-tab-pane label="表单模板" name="fromTemplate">表单模板</el-tab-pane>
					</el-tabs>
				</div>
				<div class="flex-1! b-r b-r-solid b-r-#e0e0e0">
					<header class="flex-end mr10">
						<HeadTool />
					</header>
					<el-scrollbar>
						<FormDrag
							:_config="draggableStore.formConfig"
							:model="draggableStore.formData"
							:rules="draggableStore.rules">
							<DraggableItem :widgetList="draggableStore.widgetList" />
						</FormDrag>
						<div
							class="absolute left-0 right-0 bottom-0 top-0 m-a flex-center font-size-18 color-#999"
							v-if="draggableStore.widgetList.length === 0">
							{{ designer.noWidgetHint }}
						</div>
					</el-scrollbar>
				</div>
				<div class="min-w-300">
					<el-tabs v-model="activeRight_set" @tab-click="handleRightTabClick">
						<el-scrollbar class="hfull! p0!">
							<el-tab-pane label="组件设置" name="componentSet">
								<ComponentSet />
							</el-tab-pane>
							<el-tab-pane label="表单设置" name="formSet">
								<FormSet />
							</el-tab-pane>
						</el-scrollbar>
					</el-tabs>
				</div>
			</div>
		</el-card>
	</div>
</template>

<style lang="scss" scoped>
.form-generater {
	height: calc(100vh - 124px);

	:deep(.el-card__body) {
		padding: 0 !important;
		height: 100%;
	}
	.el-scrollbar {
		height: calc(100% - 40px);
	}
	:deep(.el-scrollbar__view) {
		min-height: 100%;
		display: flex;
	}
	:deep(.el-scrollbar__bar.is-vertical) {
		width: 2px;
	}
	:deep(.el-form) {
		padding: 10px;
		flex-grow: 1;
		.el-form-item__label {
			overflow: hidden;
		}
	}
	:deep(.el-tabs) {
		height: 100%;
		.el-tabs__header {
			margin: 0;
			.el-tabs__nav-wrap {
				.el-tabs__nav {
					width: 100%;
					.el-tabs__item {
						width: 50%;
						padding: 0;
					}
				}

				&::after {
					height: 1px;
				}
			}
		}
		.el-tabs__content {
			height: calc(100% - 40px);
		}
	}
	header {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #e0e0e0;
	}
}
</style>
