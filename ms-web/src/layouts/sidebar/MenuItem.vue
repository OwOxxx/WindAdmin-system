<script lang="ts" setup>
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
  console.log(item.path)
  router.push({ path: item.path, replace: true })
}

</script>

<template>
  <el-menu-item :index="item.path" class="menu-item-wrapper" @click="handleClick(item)">
    <SvgIcon :name="item.meta ? item.meta.icon : item.icon" />
    <span class="title">{{ item.meta ? item.meta.title : item.title }}</span>
  </el-menu-item>
</template>

<style lang="scss" scoped></style>