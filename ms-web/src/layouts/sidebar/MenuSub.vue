<script lang="ts" setup>
import SvgIcon from '@/layouts/svg-icon/SvgIcon.vue';

defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <el-sub-menu :index="item.name">
    <template #title>
      <SvgIcon :icon="item.icon"/>
      <span class="title">{{ item.name }}</span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>