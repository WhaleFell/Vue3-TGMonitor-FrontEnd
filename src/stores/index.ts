// src/stores/index.ts

import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import { createPinia } from 'pinia'
export const pinia = createPinia()
export const userStore = defineStore('main', {
  state: () => {
    return {
      message: 'Hello World Pinia Store',
      randomMessages: <string[]>[],
    }
  },
})

export const useConfig = defineStore('config', {
  state: () => {
    return {
      debug: false,
      autoRefresh: false,
      autoRefreshInterval: 2000,
    }
  },
})

// https://blog.csdn.net/FantasyWeirdo/article/details/131652498
// offical document: https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html
// use pinia outside components
export const config = storeToRefs(
  useConfig(pinia),
)
