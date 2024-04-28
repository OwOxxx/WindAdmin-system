<script lang="ts" setup>
import { Iphone, Location, OfficeBuilding, Tickets, User } from "@element-plus/icons-vue"
import packageJson from "~/package.json"
function getTabelData(obj: Object) {
	const ary = []
	for (const key in obj) {
		if (typeof obj[key] === "object") {
			const children = getTabelData(obj[key])
			ary.push(...children)
		} else {
			ary.push({ keyName: key, valueName: obj[key], id: Math.random() })
		}
	}
	return ary
}
const tableData = getTabelData(packageJson)
</script>

<template>
	<div class="project-container">
		<el-descriptions class="margin-top" title="项目信息" :column="3" size="" border>
			<el-descriptions-item v-for="it in tableData" :key="it.id">
				<template #label>
					<div class="cell-item">{{ it.keyName }}</div>
				</template>
				{{ it.valueName }}
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<style lang="scss" scoped></style>
