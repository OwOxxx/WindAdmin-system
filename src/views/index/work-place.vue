<script lang="ts" setup>
import { watch } from "vue"
import { useRouter } from "vue-router"
import { DoughnutChart, MixedLine } from "./components"
</script>

<template>
	<div class="home">
		<el-row :gutter="10" class="min-w-620 !flex-nowrap">
			<el-col :xs="12" :sm="12" :lg="8">
				<el-card class="h100%" shadow="hover">
					<div class="flex flex-row">
						<img class="b-rd-50%" src="@/assets/images/img_avatar1.gif" />
						<span class="flex justify-center flex-col m-l-20">
							<p class="text-24 font-500">Hello, Admin</p>
							<p class="mt-10 text-12 opacity-50">当前角色：超级管理员</p>
						</span>
					</div>
					<div>
						<p class="mt-20 text-14 opacity-60">一个人几乎可以在任何他怀有无限热忱的事情上成功。</p>
						<p class="mt-12 text-12 opacity-50 text-right">—— 查尔斯·史考伯</p>
					</div>
				</el-card>
			</el-col>
			<el-col :xs="12" :sm="12" :lg="16">
				<el-card class="h100%" shadow="hover">
					<h3 class="opacity-90">✨ 欢迎使用 Vue Admin</h3>
					<p class="mt-10 opacity-60">
						这是一款极简风格的后台管理模板，包含前后端解决方案，前端使用 Vite + Vue3 + Pinia +
						Unocss + Element-Plus简单易用，赏心悦目，历经十几次重构和细节打磨，诚意满满！！
					</p>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="mt-10 min-w-620">
			<el-col :span="12">
				<el-card shadow="hover" class="h100%">
					<template #header>
						<div class="card-header h31">
							<span class="text-18 font-500">💯 特性</span>
							<span class="bg-#ecf1f2 b-rd-3 p5 text-15">👏 历经十几次重构和细节打磨</span>
						</div>
					</template>
					<div class="flex flex-col gap-10 text-15 opacity-80">
						<p>🆒 使用 Vue3 主流技术栈: Vite + Vue3 + Pinia + Vue-router</p>
						<p>🍇 使用 原子CSS 框架: Unocss ，优雅、轻量、易用</p>
						<!-- <p>🤹 使用主流的 iconify + unocss 图标方案，支持自定义图标，支持动态渲染</p> -->
						<p>🎨 使用 Element-plus， 极致简洁的代码风格和清爽的页面设计 ，审美在线，主题轻松定制</p>
						<p>
							👏 先进且易于理解的文件结构设计，多个模块之间 零耦合 ，单个业务模块删除不影响其他模块
						</p>
						<p>🚀 扁平化路由 设计，每一个组件都可以是一个页面，告别多级路由 KeepAlive 难实现问题</p>
						<p>🍒 基于权限动态生成路由 ，无需额外定义路由， 403和404可区分 ，而不是无权限也跳404</p>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover" body-class="body-content-chart" class="h100%">
					<template #header>
						<div class="card-header h31">
							<span class="text-18 font-500">🛠️ 技术栈</span>
						</div>
					</template>
					<DoughnutChart />
				</el-card>
			</el-col>
		</el-row>
		<el-row class="mt-10 h390">
			<el-col>
				<el-card shadow="hover" body-class="body-content-chart" class="h100%">
					<template #header>
						<div class="card-header h31">
							<span class="text-18 font-500">🍀 趋势</span>
						</div>
					</template>
					<MixedLine />
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.home {
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	:deep(.body-content-chart) {
		height: calc(100% - 68px);
	}
}
</style>
