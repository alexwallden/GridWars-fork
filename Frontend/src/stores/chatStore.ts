import { defineStore } from "pinia";
import ChatMessage from "@/models/ChatMessage";

const STORE_NAME = 'chatStore'

export const useChatStore = defineStore(STORE_NAME, {
  state: () => ({
    messages: [] as ChatMessage[]
  }),
  actions: {
    addMessage(username: string, userId: number, messageBody: string) {
      this.messages.push(new ChatMessage(username, userId, messageBody))
    }
  }
})