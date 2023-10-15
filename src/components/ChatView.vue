<template>
  <ElCard>
    <template #header>
      群名:
      <ElTag hit>
        {{ chatinfo.info.name }}
      </ElTag>
      <br />
      Type:
      <ElTag hit>{{ chatinfo.info.chat_type }}</ElTag>
      <br />
      ID:
      <ElTag hit @click="useCopyText(chatinfo.info.from_chat_id)"
        >{{ chatinfo.info.from_chat_id }}
        <el-icon><CopyDocument /></el-icon>
      </ElTag>
    </template>
    <template #default>
      描述：<el-icon @click="useCopyText(chatinfo.info.description)"
        ><CopyDocument
      /></el-icon>
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
        {{ formatDate(chatinfo.info.create_time) }}
      </ElTag>

      <br />
      最后信息时间:
      <ElTag type="success" hit>
        {{ formatDate(chatinfo.info.last_msg_time) }}
      </ElTag>
      <br />
      <ElButton
        @click="
          router.push({
            name: 'msg',
            params: { chatid: chatinfo.info.from_chat_id },
          })
        "
        >查看群信息</ElButton
      >
    </template>
  </ElCard>
</template>

<script setup lang="ts">
import { ChatInfo } from '@/schema'
import { ElCard, ElIcon, ElInput, ElTag } from 'element-plus'

import { CopyDocument } from '@element-plus/icons-vue'
import { useDateFormat } from '@vueuse/core'
import { useCopyText } from '@/plugins/clip.ts'
import { useRouter } from 'vue-router'

import { defineProps } from 'vue'

const router = useRouter()

const formatDate = (date: Date) => {
  return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
}

let chatinfo = defineProps<{
  info: ChatInfo
}>()
</script>
