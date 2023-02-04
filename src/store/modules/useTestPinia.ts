import { defineStore } from 'pinia'

export const useTestPinia = defineStore('testPinia', {
  state(){
    return {
      count: 0
    } 
  },
  getters: {
    getCount: (state) => state.count
  },
  actions: {
    onAddCount(){
      this.count++;
      return this.count
    }
  }
})

