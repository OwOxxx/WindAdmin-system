<script lang="ts" setup>
import SvgIcon from '@/layouts/svg-icon/SvgIcon.vue';

defineProps({
  item: {
    type: Object,
    required: true
  }
})

const generatorPath = () => {
  // return to.replace(/\/\w+\/\w+\/\w+\//, '/').replace(/\//g, '-')
  return ''
}
const handleClick = () => {
  // console.log('handleClick', to)
}

</script>

<template>
  <el-menu-item
    :index="item.name"
    class="menu-item-wrapper"
    @click="handleClick"
  >
  <SvgIcon :icon="item.icon"/>
    <span
      class="title"
    >{{ item.meta ? item.meta.title : item.name }}</span>
  </el-menu-item>
</template>

<style lang="scss" scoped>

</style>