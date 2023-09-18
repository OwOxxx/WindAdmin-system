<script setup lang="ts">
import { ref, computed } from 'vue';

import { useSettingStore } from '@/store/modules/setting';

const settingStore = useSettingStore();

const mode = computed(() => {
  if(settingStore.theme === 'classics') {
    return 'vertical';
  } else if(settingStore.theme === 'topb') {
    return 'horizontal';
  }
});

const isCollapse = ref(false);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


</script>

<template>
  <el-menu default-active="1" :collapse="isCollapse" @open="handleOpen" @close="handleClose" :mode="mode">
    <slot></slot>
  </el-menu>
</template>

<style lang="scss" scoped>
:deep(.el-menu),
.el-menu {
  width: 100%;
  height: 100%;
  border: none;
  // background: transparent;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  height: 50px;
  font-size: 16px;
  font-weight: 500;
}
</style>