<script lang="ts" setup>
import * as THREE from "three"
import { PointerLockControls } from "three/addons"
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from "three/addons"
import { onMounted, ref } from "vue"
import textureImage from "@/assets/source/webgl/three/img/t_brick/textures/t_brick_floor_002_diffuse_4k.jpg"
// import modelGltfUrl from "@/assets/source/webgl/three/bandeira-red-flag/source/model.gltf"

// const modelGltf = require("@/assets/source/webgl/three/bandeira-red-flag/source/model.gltf")
const webglContainer = ref(null)
onMounted(() => {
	let camera, scene, renderer, controls

	const objects = []

	let raycaster

	let moveForward = false
	let moveBackward = false
	let moveLeft = false
	let moveRight = false
	/**
	 * iframe id
	 */
	let animationFrame = null
	/**
	 * 按下shift键加速
	 */
	let pressShift = false
	let canJump = false

	let prevTime = performance.now()
	// 三维向量类Vector3
	const velocity = new THREE.Vector3()
	const color = new THREE.Color()
	/**
	 * 跳跃高度
	 */
	const JumpHeight = 200
	/**
	 * 眼睛位置
	 */
	const eyeHeight = 10
	let blocks = []

	init()

	function init() {
		/**
		 * 透视相机
		 */
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)

		scene = new THREE.Scene()
		scene.background = new THREE.Color(0xceefcc)
		// 一个fog实例定义了影响场景中的每个物体的雾的类型。默认值为null。// 创建雾 (颜色, 受影响最小距离, 受影响最大距离)
		scene.fog = new THREE.Fog(0xcffecc, 0, 850)

		// 辅助观测坐标系
		// const axesHelper = new THREE.AxesHelper(500);
		// scene.add(axesHelper);

		/**
		 * 半球光
		 */
		const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75)
		light.position.set(0.5, 1, 0.75)
		scene.add(light)

		/**
		 * 指针锁定控制器 https://threejs.org/docs/index.html?q=cont#examples/zh/controls/PointerLockControls
		 * 锁定鼠标api https://developer.mozilla.org/zh-CN/docs/Web/API/Pointer_Lock_API
		 */
		controls = new PointerLockControls(camera, document.body)

		const blocker = document.getElementById("blocker")
		const instructions = document.getElementById("instructions")

		instructions.addEventListener("click", function () {
			console.log("click")
			controls.lock()
		})

		controls.addEventListener("lock", function () {
			console.log("lock")
			instructions.style.display = "none"
			blocker.style.display = "none"
			animate()
		})

		controls.addEventListener("unlock", function () {
			console.log("unlock")
			blocker.style.display = "block"
			instructions.style.display = ""
			//取消 逐帧执行
			cancelAnimationFrame(animationFrame)
		})

		scene.add(controls.getObject())

		/**
		 * 上帝视角
		 */
		camera.position.set(0, 10, 70)

		const onKeyDown = function (event) {
			switch (event.code) {
				case "ArrowUp":
				case "KeyW":
					moveForward = true
					break

				case "ArrowLeft":
				case "KeyA":
					moveLeft = true
					break

				case "ArrowDown":
				case "KeyS":
					moveBackward = true
					break

				case "ArrowRight":
				case "KeyD":
					moveRight = true
					break
				case "ShiftLeft":
				case "ShiftRIGHT":
					pressShift = true
					break

				case "Space":
					//可以跳的时候跳 y轴增加 开始跳跃时将可以跳跃状态设置为false 不可以二连跳
					if (canJump === true) velocity.y += JumpHeight
					canJump = true
					break
			}
		}

		const onKeyUp = function (event) {
			switch (event.code) {
				case "ArrowUp":
				case "KeyW":
					moveForward = false
					break

				case "ArrowLeft":
				case "KeyA":
					moveLeft = false
					break

				case "ArrowDown":
				case "KeyS":
					moveBackward = false
					break

				case "ArrowRight":
				case "KeyD":
					moveRight = false
					break
				case "ShiftLeft":
				case "ShiftRIGHT":
					pressShift = false
					break
			}
		}

		document.addEventListener("keydown", onKeyDown)
		document.addEventListener("keyup", onKeyUp)

		raycaster = new THREE.Raycaster(
			// 三维向量类Vector3
			new THREE.Vector3(),
			new THREE.Vector3(0, -1, 0),
			0,
			//只投射10距离 判断近距离的射线
			10
		)

		// floor
		let floorGeometry = new THREE.PlaneGeometry(2000, 2000, 2, 2)
		floorGeometry.rotateX(-Math.PI / 2)

		const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xcfffcc })

		const floor = new THREE.Mesh(floorGeometry, floorMaterial)
		scene.add(floor)

		/**
		 * 4阶台阶🧱
		 */
		const genBlock = () => {
			const blocks = []
			for (let i = 0; i < 4; i++) {
				const height = 20 * (i + 1)
				// console.log(height)
				const width = 15
				//toNonIndexed 返回已索引的 BufferGeometry 的非索引版本。
				const boxGeometry = new THREE.BoxGeometry(width, height, 50).toNonIndexed()
				// console.log(boxGeometry)
				let position = boxGeometry.attributes.position
				const colorsBox = []

				for (let i = 0, l = position.count; i < l; i++) {
					color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75)
					colorsBox.push(color.r, color.g, color.b)
				}

				boxGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colorsBox, 3))
				// objects    MeshPhongMaterial一种用于具有镜面高光的光泽表面的材质。
				const boxMaterial = new THREE.MeshPhongMaterial({
					specular: 0xffffff,
					flatShading: true,
					vertexColors: true,
				})
				boxMaterial.color.setHSL(
					Math.random() * 0.75 + 0.25,
					Math.random() * 0.95,
					Math.random() * 0.75 + 0.25
				)

				const box = new THREE.Mesh(boxGeometry, boxMaterial)
				box.position.x = width * i * 2 // 最后一次的位置为90;
				box.position.y = 0
				box.position.z = 0

				blocks.push(box)
			}

			// 添加运动的板子
			const moveFloorGeometry = new THREE.BoxGeometry(60, 10, 10)
			//纹理贴图加载器TextureLoader
			const texLoader = new THREE.TextureLoader()
			// .load()方法加载图像，返回一个纹理对象Texture
			const texture = texLoader.load(textureImage)
			texture.wrapS = THREE.RepeatWrapping
			texture.wrapT = THREE.RepeatWrapping
			texture.repeat.x = 16
			texture.repeat.y = 2
			// MeshLambertMaterial一种非光泽表面的材质，没有镜面高光。
			const moveFloorMaterial = new THREE.MeshLambertMaterial({
				// 设置纹理贴图：Texture对象作为材质map属性的属性值
				map: texture, //map表示材质的颜色贴图属性
				bumpMap: texture,
			})

			const moveMesh = new THREE.Mesh(moveFloorGeometry, moveFloorMaterial)
			moveMesh.position.set(150, 40, 0)
			blocks.push(moveMesh)

			// 终点
			const endBoxGeometry = new THREE.BoxGeometry(15, 80, 50).toNonIndexed()

			let position = endBoxGeometry.attributes.position
			const colorsBox = []

			for (let i = 0, l = position.count; i < l; i++) {
				color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75)
				colorsBox.push(color.r, color.g, color.b)
			}

			endBoxGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colorsBox, 3))
			const endBoxMaterial = new THREE.MeshPhongMaterial({
				specular: 0xffffff,
				flatShading: true,
				vertexColors: true,
			})
			endBoxMaterial.color.setHSL(
				Math.random() * 0.75 + 0.25,
				Math.random() * 0.95,
				Math.random() * 0.75 + 0.25
			)

			const endBoxMesh = new THREE.Mesh(endBoxGeometry, endBoxMaterial)
			endBoxMesh.position.set(220, 0, 0)

			blocks.push(endBoxMesh)

			// 加载终点旗帜
			// 创建GLTF加载器对象
			const loader = new GLTFLoader()
			loader.load(
				"src/assets/source/webgl/three/bandeira-red-flag/source/model.gltf",
				function (gltf) {
					// plane = gltf.scene ;
					// console.log('控制台查看加载gltf文件返回的对象结构',gltf);
					// console.log('gltf对象场景属性',gltf.scene);
					// 返回的场景对象gltf.scene插入到threejs场景中
					gltf.scene.scale.set(100, 100, 100)
					gltf.scene.rotation.set(0, -Math.PI / 2, 0)
					gltf.scene.position.set(270, 50, -50)
					scene.add(gltf.scene)
					console.log(gltf.scene)
					// render();
				}
			)

			return blocks
		}

		// 环境光:没有特定方向，整体改变场景的光照明暗
		const ambient = new THREE.AmbientLight(0xffffff, 0.4)
		scene.add(ambient)

		blocks = genBlock()
		scene.add(...blocks)
		objects.push(...blocks)

		renderer = new THREE.WebGLRenderer({ antialias: true })
		// 设置雾化
		renderer.setPixelRatio(window.devicePixelRatio)

		// 设置渲染器的尺寸大小
		renderer.setSize(webglContainer.value.clientWidth, webglContainer.value.clientHeight)
		webglContainer.value.appendChild(renderer.domElement)

		window.addEventListener("resize", onWindowResize)
	}

	function onWindowResize() {
		// 防止模型被拉伸变形
		const canvas = renderer.domElement
		camera.aspect = canvas.clientWidth / canvas.clientHeight
		camera.updateProjectionMatrix()

		renderer.setSize(webglContainer.value.clientWidth, webglContainer.value.clientHeight)
		console.log(webglContainer.value.clientWidth, webglContainer.value.clientHeight)
	}
	//先渲染一次 有个基础画面
	renderer.render(scene, camera)

	/**
	 * 传入角度即方向 判断附近有没有障碍物 返回障碍物数量
	 */
	const collideCheck = angle => {
		let rotationMatrix = new THREE.Matrix4()
		rotationMatrix.makeRotationY((angle * Math.PI) / 180)
		const cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone()
		cameraDirection.applyMatrix4(rotationMatrix)
		const raycaster = new THREE.Raycaster(
			controls.getObject().position.clone(),
			cameraDirection,
			0,
			5
		)
		raycaster.ray.origin.y -= eyeHeight
		const intersections = raycaster.intersectObjects(objects, false)
		return intersections.length ? true : false
	}
	// 三维向量类Vector3
	const direction = new THREE.Vector3()
	let val = 0.1
	function animate() {
		animationFrame = requestAnimationFrame(animate)
		// blocks[0].position.x += 0.1;
		// 来回运动的地板
		blocks[4].position.z += val
		if (blocks[4].position.z > 25) {
			val = -0.1
		} else if (blocks[4].position.z < -25) {
			val = 0.1
		}
		// console.log(blocks[4].position.z)

		const time = performance.now()
		if (controls.isLocked === true) {
			/**
			 * 射线原点是相机位置  但是 要从脚下开始算 所以 y轴 -10
			 * 判断前面有没有
			 */

			// controls.getObject().position 锁定控制器的位置
			raycaster.ray.origin.copy(controls.getObject().position)
			raycaster.ray.origin.y -= eyeHeight

			// 计算物体和射线的焦点intersectObjects(objects,recursive)
			// objects —— 检测和射线相交的一组物体。
			// recursive —— 若为true，则同时也会检测所有物体的后代。否则将只会检测对象本身的相交部分。默认值为true。
			const intersections = raycaster.intersectObjects(objects, false)
			// 脚下有objects的mesh则为1，否则为0
			const onObject = intersections.length
			// console.log(onObject)

			//四个方位是否产生碰撞
			let leftCollide = false
			let rightCollide = false
			let forwardCollide = false
			let backCollide = false
			/**
			 * 碰撞检测 collide check
			 */
			if (moveForward) forwardCollide = collideCheck(0)
			if (moveBackward) backCollide = collideCheck(180)
			if (moveLeft) leftCollide = collideCheck(90)
			if (moveRight) rightCollide = collideCheck(270)
			// if (moveRight) rightCollide = collideCheck(360);

			// direction.z = Number(moveForward) - Number(moveBackward);
			// direction.x = Number(moveRight) - Number(moveLeft);
			// direction.normalize(); // 确保各个方向的一致运动

			//每一帧的间隔时间 保证相同时间移动相同距离
			const delta = (time - prevTime) / 1000
			// console.log(delta)
			//移动方向
			velocity.x -= velocity.x * 10.0 * delta
			velocity.z -= velocity.z * 10.0 * delta
			velocity.y -= 9.8 * 100.0 * delta
			//根据boolean值 巧妙判断方向 决定下面移动的值
			direction.z = Number(moveForward) - Number(moveBackward)
			direction.x = Number(moveRight) - Number(moveLeft)
			direction.normalize() // 确保各个方向的一致运动

			//按下了前/后
			if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta
			//按下了左/右
			if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta

			//控制‘落地’
			if (onObject) {
				// console.log(velocity.y)
				// max()返回给定的一组数据中的最大值，但是不接收数组作为参数
				velocity.y = Math.max(0, velocity.y)
				canJump = true
			}

			//加速级别
			const quicken = pressShift ? 2 : 1
			//计算移动距离
			let rightDistance = -velocity.x * delta * quicken
			let forwardDistance = -velocity.z * delta * quicken
			//右侧有障碍物时向右移动 置零
			if ((moveRight && rightCollide) || (moveLeft && leftCollide)) {
				rightDistance = 0
			}
			//前方有障碍物时向前移动 置零
			if ((moveForward && forwardCollide) || (moveBackward && backCollide)) {
				forwardDistance = 0
			}
			//设置最终移动值
			if (moveLeft || moveRight) controls.moveRight(rightDistance)

			if (moveForward || moveBackward) controls.moveForward(forwardDistance)
			//没暴露y轴设置方法 可通过下面方式实现
			controls.getObject().position.y += velocity.y * delta
			//保障y轴最小为eyeHeight 而不是贴近地面
			if (controls.getObject().position.y < eyeHeight) {
				velocity.y = 0
				controls.getObject().position.y = eyeHeight
				canJump = true
			}
		}

		prevTime = time

		renderer.render(scene, camera)
	}
})
</script>
<template>
	<div id="blocker">
		<div id="instructions">
			<p>跳跳乐</p>
			<p>点击任意处开始</p>
			<p>
				移动:
				<strong>W A S D</strong>
			</p>
			<p>
				跳:
				<strong>空格</strong>
			</p>
			<p>观察: 移动鼠标</p>
		</div>
	</div>
	<div class="container_three" ref="webglContainer"></div>
</template>

<style lang="scss" scoped>
#blocker {
	position: absolute;
	width: 100%;
	height: 100%;
	/* background: linear-gradient(57deg, #c004048f, #0000006b); */
	color: #fffae5;
	font-size: 3vmin;
	letter-spacing: 0.5vmin;
}

p {
	padding: 1vmin;
}

p:first-child {
	font-size: 5vmin;
}

p:nth-child(2) {
	font-size: 3vmin;
	letter-spacing: 1vmin;
	background-color: #00000088;
	border-radius: 1vmin;
	padding: 1vmin 3vmin;
}

#instructions {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;
	font-size: 14px;
	cursor: pointer;
}
.container_three {
	width: 100%;
	height: calc(100vh - 124px);
}
</style>
