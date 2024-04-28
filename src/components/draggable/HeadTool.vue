<script lang="ts" setup>
import { useDraggableStore } from "@/store"
import { byNameGetWidgetCom } from "@/utils"

const draggableStore = useDraggableStore()

const FormDrag = byNameGetWidgetCom("formDrag")

const dialogPreview = ref(false)

const preview = () => {
	dialogPreview.value = true
}
</script>

<template>
	<el-button plain text class="color-[var(--theme-color)]!" @click="draggableStore.clear">
		清空
	</el-button>
	<el-button plain text class="color-[var(--theme-color)]!" @click="preview">预览</el-button>
	<el-button plain text class="color-[var(--theme-color)]!" @click="draggableStore.importJson">
		导入JSON
	</el-button>
	<el-button plain text class="color-[var(--theme-color)]!" @click="draggableStore.exportJson">
		导出JSON
	</el-button>
	<el-button plain text class="color-[var(--theme-color)]!" @click="draggableStore.exportCode">
		导出代码
	</el-button>
	<el-button plain text class="color-[var(--theme-color)]!" @click="draggableStore.generateSFC">
		生成SFC
	</el-button>

	<el-dialog v-model="dialogPreview" title="" width="500" draggable center>
		<FormDrag
			:_config="draggableStore.formConfig"
			:model="draggableStore.formData"
			:rules="draggableStore.previewRules">
			<ComponentGenerator :widget-list="draggableStore.widgetList" />
		</FormDrag>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="dialogPreview = false">Cancel</el-button>
				<el-button type="primary" @click="dialogPreview = false">Confirm</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<style lang="scss" scoped></style>
