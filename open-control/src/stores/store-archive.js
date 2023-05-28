import { defineStore } from 'pinia';

export const useArchiveStore = defineStore('archive', {
  state: () => ({
    archives: [],
  }),
  actions: {
    loadArhcives() {
      console.log('archive loaded')
    },
  },
});
