<script lang="ts" setup>
import SvgIcon from '@/layouts/svg-icon/SvgIcon.vue';
import router from '@/router';

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
const handleClick = (item) => {
  console.log(item.toPath)
  router.push({ path: item.toPath, replace: true })
}

</script>

<template>
  <el-menu-item :index="item.name" class="menu-item-wrapper" @click="handleClick(item)">
    <SvgIcon :icon="item.icon" />
    <span class="title">{{ item.meta ? item.meta.title : item.name }}</span>
  </el-menu-item>
</template>

<style lang="scss" scoped></style>