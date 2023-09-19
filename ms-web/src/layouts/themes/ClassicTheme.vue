<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

import SideBar from '@/layouts/sidebar/SideBar.vue';
import ToolBar from '@/layouts/toolbar/ToolBar.vue';
import MainView from '@/layouts/MainView.vue';
import Avatar from '@/layouts/avatar/Avatar.vue'


</script>

<template>
  <div id="container_sub">
    <aside class="aside">
      <div class="aside_head"></div>
      <div class="sidebar_content">
        <SideBar />
      </div>
    </aside>
    <main>
      <div class="main_head">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right">
          <ToolBar />
          <Avatar />
        </div>
      </div>
      <div class="content">
        <MainView />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#container_sub {
  display: flex;
  width: 100%;
  height: 100%;
}

aside {
  width: 240px;
  height: 100%;
  border-right: 0.5px solid #ebeef5;

  .aside_head {
    height: $head-height;
  }

  .sidebar_content {
    height: calc(100% - $head-height);
  }
}

main {
  flex: 1;
  background-color: #fff;

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

  .content {}
}
</style>