<template>
	<div id="container">
		<div class="content">
			<div class="left-side a-container" ref="left_Dom">
				<div class="form_login">
					<el-form :model="loginForm" :rules="rulesLogin" ref="loginFormRef">
						<el-form-item>
							<h2>登录</h2>
						</el-form-item>
						<el-form-item prop="username">
							<el-input placeholder="Name" v-model="loginForm.username"></el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input placeholder="Password" type="password" v-model="loginForm.password"></el-input>
						</el-form-item>
						<el-button type="primary" text style="font-size: 16px;" @click="submitFormLogin(loginFormRef)">登 录</el-button>
					</el-form>
				</div>
			</div>
			<div class="right-side a-container is-hidden" ref="right_Dom">
				<div class="form_register">
					<el-form :model="registerForm" :rules="rulesRegister" ref="registerFormRef">
						<el-form-item>
							<h2>注册</h2>
						</el-form-item>
						<el-form-item prop="username">
							<el-input placeholder="Name" v-model="registerForm.username"></el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input placeholder="Password" type="password" v-model="registerForm.password"></el-input>
						</el-form-item>
						<el-button type="primary" text style="font-size: 16px;" @click="submitFormRegister(registerFormRef)">注
							册</el-button>
					</el-form>
				</div>
			</div>
			<div class="above-side" ref="above_Dom">
				<div class="above-side__circle" ref="circle1"></div>
				<div class="above-side__circle above-side__circle--t" ref="circle2"></div>
				<el-button text style="font-size: 24px;" @click="changeModule">Sign in</el-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import { reactive, ref } from "vue"

import { post } from "@/api/http"
import { login } from "@/api/url"
import router from "@/router";

import { useUserStore } from "@/store"
const userStore = useUserStore()

// 表单校验
const loginFormRef = ref(null)
const rulesLogin = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
})
const registerFormRef = ref(null)
const rulesRegister = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
})

// 登录
const loginForm = ref({
	username: "admin",
	password: "123"
})
const submitFormLogin = async (formEl) => {
	if (!formEl) return
	try {
		await formEl.validate()
		const res = await post({
			url: login,
			data: loginForm.value
		})
		if (res.code === 200) {
			const success = await userStore.saveUser(res.data)
			if (success) {
				router.replace({ path: '/index/home' })
				ElMessage({
					type: "success",
					message: res.msg
				})
			}
		} else {
			ElMessage({
				type: "warning",
				message: res.msg
			})
		}
	} catch (error) {
		ElMessage({
			type: "warning",
			message: error
		})
	}
}

// 注册
const registerForm = ref({
	username: "",
	password: ""
})
const submitFormRegister = async (formEl) => {
	if (!formEl) return
	try {
		await formEl.validate()
		// const res = await registerReq(registerForm.value)
		// if (res.code > 0) {
		// 	ElMessage({
		// 		type: "success",
		// 		message: res.msg
		// 	})
		// } else {
		// 	ElMessage({
		// 		type: "warning",
		// 		message: res.msg
		// 	})
		// }
	} catch (error) {
		ElMessage({
			type: "warning",
			message: error
		})
	}
}

// 切换登录注册
// 获取dom
const left_Dom = ref(null)
const right_Dom = ref(null)
const above_Dom = ref(null)
const circle1 = ref(null)
const circle2 = ref(null)
const changeModule = () => {
	above_Dom.value.classList.toggle("is-gx")
	setTimeout(() => {
		above_Dom.value.classList.remove("is-gx")
	}, 1500);
	above_Dom.value.classList.toggle("is-txr")
	left_Dom.value.classList.toggle("is-hidden")
	right_Dom.value.classList.toggle("is-hidden")
	right_Dom.value.classList.toggle("is-txl")
	left_Dom.value.classList.toggle("is-txl")
	circle1.value.classList.toggle("is-txr")
	circle2.value.classList.toggle("is-txr")
}



</script>

<style lang="scss" scoped>
$bg: #edf2f0;

$neu-1: #ecf0f3;
$neu-2: #d1d9e6;

$white: #f9f9f9;
$gray: #a0a5a8;
$black: #181818;

$purple: #4b70e2;

$transition: 1.25s;

:deep(.el-input) {
	width: 350px;
	height: 40px;
	border: none;
	font-size: 16px;

	.el-input__wrapper {
		background: transparent;
		border: none;
		box-shadow: none;
		opacity: 1;
		filter: alpha(opacity=40);
		border-radius: 8px;
		box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;

		.el-input__inner {
			color: $purple;
		}
	}

	.el-input__wrapper:hover {
		box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
	}

	.is-focus {
		border: none;
		box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
	}
}

#container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

	.content {
		position: relative;
		display: flex;
		flex-flow: row nowrap;
		box-shadow: 10px 10px 10px $neu-2, -10px -10px 10px $white;
		width: 1000px;
		height: 600px;
		min-width: 1000px;
		min-height: 600px;
		background-color: $neu-1;
		box-shadow: 10px 10px 10px $neu-2, -10px -10px 10px $white;
		border-radius: 12px;
		overflow: hidden;

		@media (max-width: 1200px) {
			transform: scale(0.7);
		}

		@media (max-width: 1000px) {
			transform: scale(0.6);
		}

		@media (max-width: 800px) {
			transform: scale(0.5);
		}

		@media (max-width: 600px) {
			transform: scale(0.4);
		}

		.above-side {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 500;
			box-sizing: border-box;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			flex: 1;
			padding: 25px;
			width: 400px;
			height: 100%;
			background-color: $neu-1;
			transition: $transition;
			box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;

			overflow: hidden;

			&__circle {
				position: absolute;
				width: 500px;
				height: 500px;
				border-radius: 50%;
				background-color: $neu-1;
				box-shadow:
					inset 8px 8px 12px $neu-2,
					inset -8px -8px 12px $white;

				bottom: -60%;
				left: -60%;
				transition: $transition;

				&--t {
					top: -30%;
					left: 60%;
					width: 300px;
					height: 300px;
				}
			}
		}

		.left-side,
		.right-side {
			position: absolute;
			top: 0;
			box-sizing: border-box;
			background-color: $purple;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			align-items: center;
			width: 600px;
			height: 100%;
			padding: 25px;
			background-color: $neu-1;
			transition: all $transition;
			box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;

			.form_login,
			.form_register {
				width: 100%;
				height: 100%;

				:deep(.el-form) {
					height: 100%;
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					align-items: center;
				}
			}
		}

		.a-container {
			z-index: 100;
			left: calc(100% - 600px);
		}

		.b-container {
			left: calc(100% - 600px);
			z-index: 0;
		}

		/**/
		.is-txr {
			left: calc(100% - 400px);
			transition: $transition;
			transform-origin: left;
		}

		.is-txl {
			left: 0;
			transition: $transition;
			transform-origin: right;
		}

		.is-z200 {
			z-index: 200;
			transition: $transition;
		}

		.is-hidden {
			visibility: hidden;
			opacity: 0;
			position: absolute;
			transition: $transition;
		}

		.is-gx {
			animation: is-gx $transition;
		}

		@keyframes is-gx {

			0%,
			10%,
			100% {
				width: 400px;
			}

			30%,
			50% {
				width: 500px;
			}
		}
	}
}
</style>
