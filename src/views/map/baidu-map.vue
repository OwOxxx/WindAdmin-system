<script setup>
import { onMounted, ref } from "vue"

const baiduRef = ref(null)

async function initMap() {
	const map = new BMapGL.Map(baiduRef.value) // 创建地图实例
	const point = new BMapGL.Point(116.404, 39.915) // 创建点坐标
	map.enableScrollWheelZoom(true) // 滚轮缩放
	map.centerAndZoom(point, 15)
	const navi3DCtrl = new BMapGL.NavigationControl3D() // 添加3D控件
	map.addControl(navi3DCtrl)
	const scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
	map.addControl(scaleCtrl)
	const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
	map.addControl(zoomCtrl)
}

onMounted(() => {
	initMap()
})
</script>

<template>
	<div id="container">
		<div ref="baiduRef" id="baidu" class="w-full h-full"></div>
	</div>
</template>

<style lang="scss" scoped>
#container {
	height: calc(100vh - $head-height - $tabHeight - 24px);
}
</style>
