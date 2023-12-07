<script lang="ts" setup>
import { useVisitedViewStore } from '@/store/modules/view';

const visitedViewStore = useVisitedViewStore();
</script>

<template>
  <div class="collapse">
    <SvgIcon :name="visitedViewStore.isCollapse ? 'expand' : 'fold'" class="svg-icon" @click="visitedViewStore.toggleCollapse" />
  </div>
</template>

<style lang="scss" scoped>
.collapse {
  padding: 0 10px;

  .svg-icon {
    font-size: 25px;
    vertical-align: middle;
  }
}
</style>