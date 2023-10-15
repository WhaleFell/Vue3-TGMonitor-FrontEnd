<template>
  <ElPageHeader title="返回">
    <template #content>
      <span class="text-large font-600 mr-3">
        TG 群监控
      </span>
      Debug:
      <ElSwitch v-model="debug"></ElSwitch>
      自动刷新:
      <ElSwitch v-model="autoRefresh"></ElSwitch>
      时间间隔:(ms)
      <ElSelect
        v-model="autoRefreshInterval"
        placeholder="间隔"
      >
        <ElOption
          v-for="data in selectInterval"
          :value="data"
        ></ElOption>
      </ElSelect>
    </template>
  </ElPageHeader>
</template>

<script setup lang="ts">
import {
  ElOption,
  ElPageHeader,
  ElSelect,
  ElSwitch,
} from 'element-plus'
import { config } from '@/stores';
import { ref } from 'vue'

const selectInterval = ref<Array<number>>([
  1000, 2000, 300,
])
const {
  debug,
  autoRefresh,
  autoRefreshInterval,
} = config
</script>
