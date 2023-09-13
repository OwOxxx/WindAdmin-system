<script lang="ts" setup>
import { ref } from 'vue';

const theme_switch = ref(false);
import { useDark, useToggle, useColorMode } from "@vueuse/core"
const isDark = useDark()
const colorMode = useColorMode({
  // 自定义主题
  // modes: {
  //   dim: 'dim',
  //   cafe: 'cafe'
  // },
  attribute: "theme"
})
const toggle = useToggle(isDark)

</script>

<template>
  <el-switch v-model="theme_switch" @change="toggle" active-action-icon="Moon" inactive-action-icon="Sunny"
    style="--el-switch-on-color: #6d6d6d; --el-switch-off-color: #6d6d6d"/>
</template>

<style lang="scss" scoped>
</style>