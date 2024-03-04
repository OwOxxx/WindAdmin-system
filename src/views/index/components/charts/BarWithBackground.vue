<script lang="ts" setup>
import { onMounted, ref } from "vue"

import * as echarts from "echarts/core"
import { GridComponent } from "echarts/components"
import { BarChart } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([GridComponent, BarChart, CanvasRenderer])
const chartDom = ref(null)

onMounted(() => {
	const myChart = echarts.init(chartDom.value)

	window.addEventListener("resize", function () {
		myChart.resize()
	})

	const option = {
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
			// show: false,
			axisTick: {
				show: false, // 是否显示坐标轴刻度
			},
			axisLine: {
				show: false, // 是否显示坐标轴轴线
			},
		},
		yAxis: {
			type: "value",
			show: false,
      max: 200,  // 第一个柱状图的最大值
		},
		labelLine: {
			show: false,
		},
		itemStyle: {
			borderRadius: [10, 10, 0, 0],
		},
		series: [
			{
				data: [120, 150, 80, 70, 130],
				type: "bar",
				showBackground: true,
				barMaxHeight: 200,
				backgroundStyle: {
					color: "rgba(180, 180, 180, 0.2)",
					borderRadius: 10,
				},
			},
		],
	}

	option && myChart.setOption(option)
})
</script>

<template>
	<div class="container h-full">
		<div ref="chartDom" style="width: 100%; height: 100%"></div>
	</div>
</template>

<style lang="scss" scoped></style>
