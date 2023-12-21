<script lang="ts" setup>
import { onMounted, ref } from "vue"

import * as echarts from "echarts/core"
import { TooltipComponent, LegendComponent } from "echarts/components"
import { PieChart } from "echarts/charts"
import { LabelLayout } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout])
const chartDom = ref(null)

onMounted(() => {
	console.log(chartDom)
	const myChart = echarts.init(chartDom.value)

	window.addEventListener("resize", function () {
		myChart.resize()
	})

	const option = {
		tooltip: {
			trigger: "item",
			formatter({ name, value }) {
				return `${name} ${value}%`
			},
		},
		legend: {
			top: "5%",
			left: "center",
		},
		series: [
			{
				name: "Access From",
				type: "pie",
				radius: ["40%", "70%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2,
				},
				label: {
					show: false,
					position: "center",
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: false,
				},
				data: [
					{ value: 38.5, name: "Vue" },
					{ value: 37.0, name: "JavaScript" },
					{ value: 6.5, name: "CSS" },
					{ value: 6.2, name: "HTML" },
					{ value: 1.8, name: "Other" },
				],
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
