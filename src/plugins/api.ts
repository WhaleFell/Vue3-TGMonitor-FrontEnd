// src/plugins/api.ts
import { request } from './useRequest'
import { ChatInfo } from '@/schema'

// get chat infomation /chat/all/

export async function getChats(): Promise<Array<ChatInfo> | void> {
  const resp = await request.get('/chat/all/')
  if (resp.data) {
    return resp.data as Array<ChatInfo>
  }
}
