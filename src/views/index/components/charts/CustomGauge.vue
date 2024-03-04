<script lang="ts" setup>
import { onMounted, ref } from "vue"

import * as echarts from "echarts/core"
import { GaugeChart } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([GaugeChart, CanvasRenderer])
const chartDom = ref(null)

onMounted(() => {
	const myChart = echarts.init(chartDom.value)

	window.addEventListener("resize", function () {
		myChart.resize()
	})

	const option = {
		//下面属性才是仪表盘的核心！！反正我是这么认为的！！！
		series: [
			{
				//类型
				type: "gauge",
				//半径
				radius: 150,
				//起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
				startAngle: 180,
				min: 0,
				max: 20000,
				//结束角度。
				endAngle: 0,
				center: ["50%", "80%"],
				itemStyle: {
					color: "#58D9F9",
					shadowColor: "rgba(0,138,255,0.45)",
					shadowBlur: 10,
					shadowOffsetX: 2,
					shadowOffsetY: 2,
				},
				progress: {
					show: true,
					roundCap: true,
					width: 30,
				},
				//仪表盘轴线相关配置。
				axisLine: {
					roundCap: true,
					lineStyle: {
						width: 30,
					},
				},
				//分隔线样式。
				splitLine: {
					show: false,
				},
				//刻度样式。
				axisTick: {
					show: false,
				},
				//刻度标签。
				axisLabel: {
					show: false,
				},
				//仪表盘指针。
				pointer: {
					//这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
					show: false,
					//指针长度
					length: "90%",
					width: 0,
				},
				//仪表盘标题。
				title: {
					show: true,
					offsetCenter: [0, "0%"], // x, y，单位px
					textStyle: {
						color: "#bbbbbb",
						fontSize: 16,
					},
				},
				//仪表盘详情，用于显示数据。
				detail: {
					width: "60%",
					lineHeight: 40,
					height: 40,
					offsetCenter: [0, "-20%"],
					valueAnimation: true,
					formatter: function (value) {
						return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
					},
					rich: {
						value: {
							fontSize: 50,
							fontWeight: "bolder",
							color: "#777",
						},
						unit: {
							fontSize: 20,
							color: "#999",
							padding: [0, 0, -20, 10],
						},
					},
				},
				data: [
					{
						value: 12023,
						name:'Tasks',
					},
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
