<script setup lang="ts">
import { ref } from "vue"

import MenuScroll from "@/layouts/sidebar/MenuScroll.vue"
import SideBarItem from "@/layouts/sidebar/SideBarItem.vue"
import { usePermissionStore } from "@/store/modules/premission"

const permissionStore = usePermissionStore()
</script>

<template>
	<MenuScroll>
		<template v-for="(item, index) in permissionStore.getPermissionSideBar" :key="item.path">
			<SideBarItem :item="item" />
		</template>
	</MenuScroll>
</template>

<style lang="scss" scoped></style>
