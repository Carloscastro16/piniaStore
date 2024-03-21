import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ICounter {
  count: number
}

export const useCounterStore = defineStore('counter', () => {
  //state
  const count = ref(0)

  //actions
  function increment() {
    count.value++
  }
  //getters
  const doubleCount = computed(() => count.value * 2)

  return { count, doubleCount, increment }
})
