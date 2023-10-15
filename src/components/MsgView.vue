<template>
  <ElCard>
    <template #header>
      <el-avatar>
        {{ matchFirstWord(msgInfo.msg.username) }}
      </el-avatar>
      Name:
      <ElTag hit @click="useCopyText(msgInfo.msg.username)"
        >{{ msgInfo.msg.username }}
        <el-icon><CopyDocument /></el-icon>
      </ElTag>
      TG ID:
      <ElTag hit @click="useCopyText(msgInfo.msg.tg_id)"
        >{{ msgInfo.msg.tg_id }}
        <el-icon><CopyDocument /></el-icon>
      </ElTag>
      发送时间:
      <ElTag>{{ formatDate(msgInfo.msg.msg_time) }}</ElTag>
    </template>
    <template #default>
      content:
      <el-icon @click="useCopyText(msgInfo.msg.content)"
        ><CopyDocument
      /></el-icon>
      <ElInput
        type="textarea"
        show-word-limit
        autosize
        v-model="msgInfo.msg.content"
        disabled
      >
      </ElInput>
    </template>
  </ElCard>
</template>

<script setup lang="ts">
import { Msg } from '@/schema'
import { ElCard, ElIcon, ElTag } from 'element-plus'

import { CopyDocument } from '@element-plus/icons-vue'
import { useDateFormat } from '@vueuse/core'
import { useCopyText } from '@/plugins/clip.ts'

import { defineProps } from 'vue'

const matchFirstWord = (str: string): string => {
  const pat = str.match(/@\(([\u4e00-\u9fa5\w])/)
  if (pat) {
    return pat[1]
  }

  return 'N'
}

const formatDate = (date: Date) => {
  return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss').value
}

let msgInfo = defineProps<{
  msg: Msg
}>()
</script>
