<script setup lang="ts">
import ClassicTheme from '@/layouts/themes/ClassicTheme.vue';
import TopBLayout from '@/layouts/themes/TopBLayout.vue';

import { useSettingStore } from '@/store/modules/setting';

const settingStore = useSettingStore();
console.log(settingStore.theme);

</script>

<template>
  <div id="container">
    <template v-if="settingStore.getTheme == 'classic'">
      <ClassicTheme />
    </template>
    <template v-else-if="settingStore.getTheme == 'topb'">
      <TopBLayout />
    </template>
  </div>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>