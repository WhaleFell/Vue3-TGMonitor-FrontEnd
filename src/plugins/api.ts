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

// get message /msg/views/?
// {
//   "total": 1,
//   "page": 1,
//   "size": 1,
//   "pages": 1,
//   "data": [
//     {
//       "tg_id": "5954579331",
//       "username": "@(陈霖)",
//       "from_chat_id": "-1001616666972",
//       "content": "你就不要再旁边煽风点火了真的",
//       "msg_time": "2023-10-12T20:11:11"
//     }
//   ]
// }
import {
  queryMsgParam,
  msgPagination,
} from '@/schema'

export async function getMsgs(
  query: queryMsgParam,
): Promise<msgPagination | void> {
  const resp = await request.get('/msg/views/', {
    params: query,
  })
  if (resp.data) {
    return resp.data as msgPagination
  }
}
