import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const token = ref('')

  return { token}
},{
  persist: true // 开启数据持久化
})
