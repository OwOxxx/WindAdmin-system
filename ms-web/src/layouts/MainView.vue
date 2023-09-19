<template>
  <router-view v-slot="{ Component, route }">
    <transition>
      <!-- <keep-alive :include="cachedRouteStore.getCachedRouteName"> -->
      <component :is="Component" :key="route.fullPath" />
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MainView',
  setup() {
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  animation: bounce-in 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
