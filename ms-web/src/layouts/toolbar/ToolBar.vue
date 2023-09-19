<script lang="ts" setup>
import SystemSet from "@/layouts/setting/SystemSet.vue"
import { ref } from "vue";

const openSet = ref(false)
const closeSet = () => {
  openSet.value = false;
}

</script>

<template>
  <div class="tools">
    <SvgIcon name="search" class='fs20' />
    <SvgIcon name="notification" class='fs20' />
    <SvgIcon name="refresh" class='fs20' />
    <SvgIcon name="fullScreen" class='fs20' />
    <SvgIcon @click="openSet = true" name="setting" class='fs20' />
  </div>
  <SystemSet @closeSet="closeSet" :isOpen="openSet" />
</template>

<style lang="scss" scoped>
.tools {
  display: flex;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100%;
}

.fs20 {
  cursor: pointer;
  font-size: 20px;
}
</style>