<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: '14px'
  },
  color: {
    type: String,
    default: '#fff'
  },
  iconClass: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <el-icon :size="size" :color="color" :class="iconClass">
    <component :is="icon"  aria-hidden="true">
    </component>
  </el-icon>
</template>


<style scoped>
</style>
