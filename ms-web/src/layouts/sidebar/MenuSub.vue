<script lang="ts" setup>

defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <el-sub-menu :index="item.path">
    <template #title>
      <SvgIcon :name="item.meta ? item.meta.icon : item.icon" />
      <span class="title">{{ item.meta ? item.meta.title : item.title }}</span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>