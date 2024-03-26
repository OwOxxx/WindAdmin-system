<template>
	<div ref="domRef" class="w100% h800"></div>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader"
import { onMounted, ref } from "vue"
import { useScriptTag } from "@vueuse/core"
import { AMAP_SDK_URL, AMAP_KEY } from "@/config"
import "@amap/amap-jsapi-types"

defineOptions({ name: "GaodeMap" })

// const { load } = useScriptTag(AMAP_SDK_URL)

const domRef = ref<HTMLDivElement>()
const map = ref<AMap.Map>()

async function renderMap() {
	// await load(true)
	// if (!domRef.value) return
	// const map = new AMap.Map(domRef.value, {
	// 	zoom: 11,
	// 	center: [114.05834626586915, 22.546789983033168],
	// 	viewMode: "3D",
	// })
	// map.getCenter()
	AMapLoader.load({
		key: AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
		version: "", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
		plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
	})
		.then(AMap => {
			map.value = new AMap.Map(domRef.value, {
				// 设置地图容器id
				viewMode: "3D", // 是否为3D地图模式
				zoom: 11, // 初始化地图级别
				center: [116.397428, 39.90923], // 初始化地图中心点位置
			})
		})
		.catch(e => {
			console.log(e)
		})
}

onMounted(() => {
	renderMap()
})
</script>

<style scoped></style>
