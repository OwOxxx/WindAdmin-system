<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { usePermissionStore } from '@/store/modules/premission';
import { useRouter } from 'vue-router';
import { reactive, watch } from 'vue';

const PermissionStore = usePermissionStore();
const router = useRouter();

const breadcrumbList = reactive([]);

function generatorList(Routes) {
  Routes.forEach(item => {
    if (router.currentRoute.value.path.includes(item.path)) {
      breadcrumbList.push(item)
      if (item.children) {
        generatorList(item.children)
      }
    }
  })
}

watch(() => router.currentRoute.value.path, () => {
  breadcrumbList.length = 0
  generatorList(PermissionStore.permissionRoutes)
  console.log(breadcrumbList)
}, { immediate: true })
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <TransitionGroup name="list">
        <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">{{ item.meta ? item.meta.title : item.title
        }}</el-breadcrumb-item>
      </TransitionGroup>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>