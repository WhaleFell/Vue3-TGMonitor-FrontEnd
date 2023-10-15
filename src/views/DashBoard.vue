<template>
  <ChatView
    :info="data"
    v-for="data in chatinfos"
  ></ChatView>
</template>

<script setup lang="ts">
import ChatView from '@/components/ChatView.vue'
import { getChats } from '@/plugins/api'
import { ChatInfo } from '@/schema'
import { ref, onMounted } from 'vue'
import { config } from '@/stores'
import { watchEffect } from 'vue'

const chatinfos = ref<ChatInfo[]>()
const { autoRefresh, autoRefreshInterval } =
  config

const sleep = (
  timeout: number,
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done')
    }, timeout)
  })
}

const req = async () => {
  while (autoRefresh.value) {
    getChats().then((datas) => {
      if (datas) {
        chatinfos.value = datas
      }
    })
    await sleep(autoRefreshInterval.value)
  }
}

// 监听一个函数内的参数,如果有改变就运行
watchEffect(req)

onMounted(() => {
  getChats().then((datas) => {
    if (datas) {
      chatinfos.value = datas
    }
  })
})
</script>
