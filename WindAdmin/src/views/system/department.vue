<template>
	<div><renderFunction :test="obj" /></div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from "vue"

const obj = {
	a: h("div", "Hello World"),
	b: 2,
}

// 不需要再使用 .value
const renderedContent = ref(null)

const renderFunction = (props, context) => {
	// 创建一个 div 元素
	return props.test.a
}

// 在组件挂载后调用渲染函数，并将结果保存在 renderedContent 中
</script>
