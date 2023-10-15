// src/router/routes.ts 路由定义

import type { RouteRecordRaw } from 'vue-router'

// define routes
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'dashboard' } },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import('@/views/DashBoard.vue'),
    meta: {
      title: 'Dashboard | 控制台',
    },
  },
  {
    path: '/msg/:chatid',
    name: 'msg',
    component: () => import('@/views/Msg.vue'),
    meta: {
      title: 'ChatView | 群信息',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]

export default routes
