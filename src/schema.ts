// src/schema.ts 接口的类型

// /chat/all/
// {
//   "from_chat_id": "string",
//   "name": "NotFound",
//   "chat_type": "string",
//   "description": "empty description",
//   "create_time": "2023-10-14T07:00:21.995Z",
//   "last_msg_time": "2023-10-14T07:00:21.995Z"
// }
export interface ChatInfo {
  from_chat_id: string
  name: string
  chat_type: string
  description: string
  create_time: Date
  last_msg_time: Date
}

export interface queryMsgParam {
  from_chat_id: string
  page: number
  size: number
  tg_id?: string
  keyword?: string
}

export interface Msg {
  tg_id: string
  username: string
  from_chat_id: string
  content: string
  msg_time: Date
}

export interface msgPagination {
  total: number
  page: number
  size: number
  pages: number
  data: Array<Msg>
}
