<script lang="ts" setup>
import { CustomGauge, RoundGauge, BarWithBackground } from "./components"
import { ref, onMounted } from "vue"

const companyData = [
	{
		span: 4,
		title: "Total Employees",
		value: 23000,
		unit: "",
		increase: "10%",
		icon: "user",
	},
	{
		span: 4,
		title: "Total Projects",
		value: 23000,
		unit: "",
		increase: "10%",
		icon: "project",
	},
	{
		span: 4,
		title: "Total Clients",
		value: 23000,
		unit: "",
		increase: "10%",
		icon: "client",
	},
	{
		span: 4,
		title: "Total Orders",
		value: 23000,
		unit: "",
		increase: "10%",
		icon: "order",
	},
]

const EmployeesData = [
	{
		name: "Rudolph G",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
		position: "Product Designer",
		taskCount: 198,
		score: 1230,
	},
	{
		name: "Andrew J",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
		position: "Product Designer",
		taskCount: 198,
		score: 1230,
	},
	{
		name: "Mary P",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
		position: "Product Designer",
		taskCount: 198,
		score: 1230,
	},
	{
		name: "Robert G",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
		position: "Product Designer",
		taskCount: 198,
		score: 1230,
	},
	{
		name: "Kate P",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
		position: "Product Designer",
		taskCount: 198,
		score: 1230,
	},
	{
		name: "Mary P",
		avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
		position: "Product Designer",
		taskCount: 10,
		score: 1230,
	},
]

const OtherData = [
	{
		span: 6,
		name: "Tachnology & Design Team",
		value: 960,
		info: "Employees",
		unit: "",
		color: "bulue",
	},
	{
		span: 6,
		name: "Business & Finance Team",
		value: 500,
		info: "Employees",
		unit: "",
		color: "green",
	},
	{
		span: 6,
		name: "Customer Support Team",
		value: 190,
		info: "Employees",
		unit: "",
		color: "red",
	},
	{
		span: 6,
		name: "Marketing Team",
		value: 690,
		info: "Employees",
		unit: "",
		color: "green",
	},
]
</script>

<template>
	<div class="work-place overflow-hidden">
		<el-row :gutter="10" class="min-w-620">
			<el-col :span="item.span" v-for="item in companyData">
				<el-card shadow="hover" class="h100% !b-rd-10" body-class="h100%">
					<div class="h80 pt10 pb10">
						<img src="@/assets/images/img_avatar1.gif" alt="" class="b-rd-10 h-100%" />
					</div>
					<p class="text-16 opacity-60 mt10 mb10">{{ item.title }}</p>
					<CountTo
						:prefix="item.unit"
						:start-value="1"
						:end-value="item.value"
						class="text-24 font-bold" />
					<p class="text-15 opacity-60 mt10">Task</p>
					<div class="text-15 mt20">
						<span class="color-#1890ff">+{{ item.increase }}</span>
						<span class="opacity-60 pl10">This Month</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card shadow="hover" body-class="h100%" class="h100% !b-rd-10">
					<p class="text-20 font-bold">Task Target Actual vs Prediction</p>
					<CustomGauge />
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="min-w-620 mt-10">
			<el-col :span="item.span" v-for="item in OtherData">
				<el-card shadow="hover" class="h100% !b-rd-10" body-class="h100% flex flex-col">
					<p class="text-20 font-bold">{{ item.name }}</p>
					<CountTo
						:prefix="item.unit"
						:start-value="1"
						:end-value="item.value"
						class="text-24 font-bold mt10" />
					<p class="text-15 opacity-60">{{ item.info }}</p>
					<el-progress class="mt10" :show-text="false" :percentage="item.value / 10" :stroke-width="10" :color="item.color" />
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="min-w-620 mt-10 min-h-300">
			<el-col :span="6">
				<el-card shadow="hover" class="h100% !b-rd-10" body-class="h100% flex flex-col">
					<p class="text-20 font-bold">Complete Task Target</p>
					<div class="flex-1 min-h-220 m10">
						<RoundGauge />
					</div>
					<div class="h80 pt10 pb10 flex">
						<img src="@/assets/images/img_avatar1.gif" alt="" class="b-rd-10 h-100%" />
						<div class="flex flex-col justify-center ml-10 w-full">
							<div class="flex justify-between font-bold text-16">
								<span>Completed Tasks</span>
								<span>555</span>
							</div>
							<p class="opacity-60">Global</p>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover" class="h100% !b-rd-10" body-class="h100% flex flex-col">
					<p class="text-20 font-bold">Task Count</p>
					<div class="flex-1 min-h-220">
						<BarWithBackground />
					</div>
					<div class="h80 pt10 pb10 flex">
						<img src="@/assets/images/img_avatar1.gif" alt="" class="b-rd-10 h-100%" />
						<div class="flex flex-col justify-center ml-10 w-full">
							<div class="flex justify-between font-bold text-16">
								<span>Completed Tasks</span>
								<span>555</span>
							</div>
							<p class="opacity-60">Global</p>
						</div>
					</div>
					<div class="h80 pt10 pb10 flex">
						<img src="@/assets/images/img_avatar1.gif" alt="" class="b-rd-10 h-100%" />
						<div class="flex flex-col justify-center ml-10 w-full">
							<div class="flex justify-between font-bold text-16">
								<span>Completed Tasks</span>
								<span>555</span>
							</div>
							<p class="opacity-60">Global</p>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover" class="h100% !b-rd-10" body-class="h100% flex flex-col">
					<p class="text-20 font-bold">Top Employees</p>
					<ul class="flex-1 flex flex-col gap-10 justify-center">
						<li v-for="item in EmployeesData" class="flex justify-between items-center">
							<el-avatar :size="50" :src="item.avatar" />
							<span class="font-600 ml20">{{ item.name }}</span>
							<span class="font-600 flex-grow text-center">{{ item.position }}</span>
							<span class="font-600 flex-grow text-center">{{ item.taskCount }} Tasks</span>
							<span class="color-#1890ff">{{ item.score }} pts</span>
						</li>
					</ul>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.home {
}
</style>
