<template>
  群ID:
  <el-input v-model="query.from_chat_id" placeholder="群ID" />
  用户TGID:
  <el-input v-model="query.tg_id" placeholder="用户TGID" />
  关键词:
  <el-input v-model="query.keyword" placeholder="关键词" />
  <ElPagination
    v-model:current-page="query.page"
    v-model:page-size="query.size"
    :pager-count="3"
    :total="result?.total"
    small
    background
    layout="total, sizes, prev, pager, next, jumper"
  />
  <MsgView :msg="msg" v-for="msg in result?.data"></MsgView>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, onMounted, watch, ref, watchEffect } from 'vue'
import { config } from '@/stores'
import { getMsgs } from '@/plugins/api'
import { msgPagination, queryMsgParam } from '@/schema'
import { ElPagination } from 'element-plus'
import MsgView from '@/components/MsgView.vue'

const route = useRoute()
const query = reactive<queryMsgParam>({
  from_chat_id: route.params.chatid as string,
  page: 10,
  size: 10,
})
const result = ref<msgPagination>()

const { autoRefresh, autoRefreshInterval } = config

const sleep = (timeout: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done')
    }, timeout)
  })
}

const freshData = () => {
  getMsgs(query).then((datas) => {
    if (datas) {
      result.value = datas
    }
  })
}

const req = async () => {
  while (autoRefresh.value) {
    freshData()
    await sleep(autoRefreshInterval.value)
  }
}

watch(query, () => {
  freshData()
})

watchEffect(req)

onMounted(() => {
  freshData()
})
</script>
