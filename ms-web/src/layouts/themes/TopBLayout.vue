<script lang="ts" setup>
import ToolBar from '@/layouts/toolbar/ToolBar.vue';
import MainView from '@/layouts/MainView.vue';
import SideBar from '@/layouts/sidebar/SideBar.vue';
import Avatar from '@/layouts/avatar/Avatar.vue'

</script>

<template>
  <div id="container_sub">
    <div class="main_head">
      <div class="left">
        <SideBar />
      </div>
      <!-- <div class="middle"></div> -->
      <div class="right">
        <ToolBar />
        <Avatar />
      </div>
    </div>
    <div class="content">
      <MainView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container_sub {
  width: 100%;
  height: 100%;

  .main_head {
    display: flex;
    height: $head-height;
    border-bottom: 0.5px solid #ebeef5;

    .left {
      flex: 1;
    }

    .middle {
      flex: 1;
    }

    .right {
      display: flex;
      margin: 0 20px;
    }
  }
}
</style>