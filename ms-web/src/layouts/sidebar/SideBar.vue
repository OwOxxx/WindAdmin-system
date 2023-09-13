<script setup lang="ts">
import { ref } from 'vue';

import MenuScroll from '@/layouts/sidebar/MenuScroll.vue';
import SideBarItem from '@/layouts/sidebar/SideBarItem.vue';
import appConfig from '@/config/appconfig.js';

const routes: Array<any> = ref(appConfig.routes);

</script>

<template>
  <MenuScroll>
    <template v-for="(item,index) in routes" :key="index">
      <SideBarItem :item="item" />
    </template>
  </MenuScroll>
</template>

<style lang="scss" scoped></style>