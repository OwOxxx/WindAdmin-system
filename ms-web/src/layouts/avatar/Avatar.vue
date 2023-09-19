<script lang="ts" setup>
import { ref } from 'vue';


const pull_status = ref(true)
</script>

<template>
  <div class="avatar">
    <span>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </span>
    <el-dropdown>
      <span class="el-dropdown-link">
        <i>超级管理员</i>
        <SvgIcon name="pull-down" v-if="pull_status" />
        <SvgIcon name="pull-up" v-else />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 20px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  gap: 5px;

  i {
    // 文本不换行
    white-space: nowrap;
  }
}
</style>