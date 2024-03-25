<template>
	<div class="card-draggable">
		<draggable
			:list="myList"
			ghost-class="ghost"
			chosen-class="chosenClass"
			:component-data="{
				tag: 'ul',
				class: 'list-group',
			}"
			animation="300"
			@start="onStart"
			@end="onEnd"
			item-key="id">
			<template #item="{ element }">
				<li class="list-group-item">
					{{ element.name }}
				</li>
			</template>
		</draggable>
	</div>
</template>
<script setup>
import { ref, reactive } from "vue"
import draggable from "vuedraggable"
/*
draggable 对CSS样式没有什么要求万物皆可拖拽
:list="state.list"         //需要绑定的数组
ghost-class="ghost"        //被替换元素的样式
chosen-class="chosenClass" //选中元素的样式
animation="300"            //动画效果
@start="onStart"           //拖拽开始的事件
@end="onEnd"               //拖拽结束的事件
*/
const list = new Array(64).fill(0).map((_, index) => ({
	id: index,
	name: `item-${index + 1}`,
}))

const myList = reactive(list)

//拖拽开始的事件
const onStart = () => {
	console.log("开始拖拽")
}

//拖拽结束的事件
const onEnd = () => {
	console.log("结束拖拽")
}
</script>
<style scoped lang="scss">
.card-draggable {
	height: 100%;

	.list-group {
		display: grid;
		grid-template-columns: repeat(8, 1fr);

		.list-group-item {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--menu-color-hover);
			margin: 20px;
			border: 1px solid #eee;
			aspect-ratio: 1;
			cursor: move;
		}
	}
}
.ghost {
	opacity: 0.2 !important;
	backdrop-filter: blur(10px) !important;
}
.chosenClass {
	// 变透明
	opacity: 0.5 !important;
	backdrop-filter: blur(10px) !important;
}
</style>
