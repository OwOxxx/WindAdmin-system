<script lang="ts" setup>
import { ref, watchEffect, watch, defineEmits } from 'vue';
import { useSettingStore } from '@/store/modules/setting';

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
const toggleColor = useToggle(isDark)

const settingStore = useSettingStore();
const theme = ref(false);
const changeTheme = (val) => {
  theme.value = val;
  console.log(val);
  if (val) {
    settingStore.setTheme('topb');
  } else {
    settingStore.setTheme('classic');
  }
}

const drawer_switch = ref(false)
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

watch(props, (newV, oldV) => {
  drawer_switch.value = newV.isOpen
})

function cancelClick() {
  // drawer2.value = false
}
function confirmClick() {
  // ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
  //   .then(() => {
  //     drawer2.value = false
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
}

</script>

<template>
  <el-drawer v-model="drawer_switch" @close="$emit('closeSet')">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <el-switch v-model="theme_switch" @change="toggleColor" active-action-icon="Moon" inactive-action-icon="Sunny"
        style="--el-switch-on-color: #6d6d6d; --el-switch-off-color: #6d6d6d">
      </el-switch>
      <el-switch v-model="theme" @change="changeTheme">
      </el-switch>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped></style>