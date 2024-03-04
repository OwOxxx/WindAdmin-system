<script setup lang="ts">
import { watchEffect, shallowReactive } from "vue"

import MenuScroll from "@/layouts/sidebar/MenuScroll.vue"
import SideBarItem from "@/layouts/sidebar/SideBarItem.vue"
import { usePermissionStore } from "@/store"
import { transfromMenu } from "@/utils"

const permissionStore = usePermissionStore()
const menuOptions = shallowReactive([])

watchEffect(() => {
	const tempMenu = transfromMenu(permissionStore.permissionRoutes)
	menuOptions.push(...tempMenu)
})
</script>

<template>
	<MenuScroll>
		<template v-for="(item, index) in menuOptions" :key="item.path">
			<SideBarItem :item="item" />
		</template>
	</MenuScroll>
</template>

<style lang="scss" scoped></style>
