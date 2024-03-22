<script lang="ts" setup>
import { onMounted, ref } from "vue"
import * as THREE from "three"
import { OrbitControls } from "three/addons"

const container_canvas = ref<HTMLElement | null>(null)
onMounted(() => {
	const clientWidth = container_canvas.value?.clientWidth
	const clientHeight = container_canvas.value?.clientHeight
	console.log(clientWidth, clientHeight)
	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	const renderer = new THREE.WebGLRenderer()
	renderer.setSize(clientWidth, clientHeight)
	container_canvas.value?.appendChild(renderer.domElement)

	const geometry = new THREE.BoxGeometry()
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide })
	const cube = new THREE.Mesh(geometry, material)
	scene.add(cube)

	// 光源辅助观察
	const pointLight = new THREE.PointLight(0xffffff, 1, 100)
	const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
	scene.add(pointLightHelper)
	pointLight.position.set(cube.position.x, cube.position.y, cube.position.z)

	camera.position.z = 5

	window.onresize = () => {
		const clientWidth = container_canvas.value?.clientWidth
		const clientHeight = container_canvas.value?.clientHeight
		renderer.setSize(clientWidth, clientHeight)
		camera.aspect = clientWidth / clientHeight
		camera.updateProjectionMatrix()
	}

	const animate = () => {
		requestAnimationFrame(animate)

		cube.rotation.x += 0.01
		cube.rotation.y += 0.01

		renderer.render(scene, camera)
	}

	// 设置相机控件轨道控制器OrbitControls
	const controls = new OrbitControls(camera, renderer.domElement)
	// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
	controls.addEventListener("change", function () {
		renderer.render(scene, camera) //执行渲染操作
	}) //监听鼠标、键盘事件

	animate()
})
</script>

<template>
	<div class="container_three1" ref="container_canvas"></div>
</template>

<style lang="scss" scoped>
.container_three1 {
	width: 100%;
	height: calc(100vh - 124px);
}
</style>
