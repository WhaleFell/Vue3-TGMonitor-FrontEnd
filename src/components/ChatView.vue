<template>
  <ElCard>
    <template #header>
      群名:
      <ElTag hit>
        {{ chatinfo.info.name }}
      </ElTag>
      <br />
      Type:
      <ElTag hit>{{
        chatinfo.info.chat_type
      }}</ElTag>
      <br />
      ID:
      <ElTag hit>{{
        chatinfo.info.from_chat_id
      }}</ElTag>
    </template>
    <template #default>
      描述：
      <ElInput
        type="textarea"
        show-word-limit
        autosize
        v-model="chatinfo.info.description"
        disabled
      >
      </ElInput>

      <br />
      <br />
      监控时间:
      <ElTag type="success" hit>
        {{
          formatDate(chatinfo.info.create_time)
        }}
      </ElTag>

      <br />
      最后信息时间:
      <ElTag type="success" hit>
        {{
          formatDate(chatinfo.info.last_msg_time)
        }}
      </ElTag>
    </template>
  </ElCard>
</template>

<script setup lang="ts">
import { ChatInfo } from '@/schema'
import {
  ElCard,
  ElInput,
  ElTag,
} from 'element-plus'
import { useDateFormat } from '@vueuse/core'
import { defineProps } from 'vue'

const formatDate = (date: Date) => {
  return useDateFormat(
    date,
    'YYYY-MM-DD HH:mm:ss',
  ).value
}

let chatinfo = defineProps<{
  info: ChatInfo
}>()
</script>
