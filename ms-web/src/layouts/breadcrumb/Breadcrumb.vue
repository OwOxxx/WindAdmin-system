<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'

import { useVisitedViewStore } from '@/store';


const visitedViewStore = useVisitedViewStore();



</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <TransitionGroup name="list">
        <el-breadcrumb-item v-for="item in visitedViewStore.breadcrumbList" :key="item.path">{{ item.meta ? item.meta.title : item.title
        }}</el-breadcrumb-item>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>