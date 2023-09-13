<script setup lang="ts">
import SideBar from './layouts/sidebar/SideBar.vue';
import ToolBar from './layouts/toolbar/ToolBar.vue';

</script>

<template>
  <div id="container">
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
        </div>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  height: 100vh;
}

aside {
  width: 240px;
  height: 100%;
  border-right: 0.5px solid #ebeef5;

  .aside_head {
    height: 60px;
  }

  .sidebar_content {
    height: calc(100% - 60px);
  }
}

main {
  flex: 1;
  background-color: #fff;
  .main_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 0.5px solid #ebeef5;

    .left {}

    .middle {
      flex: 1;
      text-align: center;
    }

    .right {

    }
  }
}
</style>