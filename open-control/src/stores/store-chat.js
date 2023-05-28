import { defineStore } from 'pinia';
import db from 'src/assets/test.json'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [],
  }),
  actions: {
    send(text, bot = false) {
      const id = this.messages.length <= 0 ? 1 : this.messages.length
      this.messages.push({
        id: id,
        from: bot ? 'bot' : 'me',
        text: text
      })
      console.log('message sent : ', {
        id: id,
        from: bot ? 'bot' : 'me',
        text: text
      })
      this.generateResponse(text)
      this.syncChatStorage()
    },
    generateResponse (text) {
      console.log('response for request: ', db)
      const id = this.messages.length <= 0 ? 1 : this.messages.length
      this.messages.push({
        id: id,
        from: 'bot',
        text: text
      })
    },
    syncChatStorage() {
      localStorage.setItem('messages', JSON.stringify(this.messages));
    },
    loadChatHistory() {
      const storedMessages = localStorage.getItem('messages');
      if (storedMessages) {
        this.messages = JSON.parse(storedMessages);
      }
    }
  }
});
