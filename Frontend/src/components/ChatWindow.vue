<template>
  <section class="chat-container">
    <div class="chat-messages"></div>
    <input class="chat-input" ref="input" id="inputText" type="text" />
    <button class="chat-input-btn" @click="sendMessage">Send</button>
    <ul>
      <li
        :class="message.userId === loggedInUser ? 'my-message' : 'other-message'"
        v-for="(message, i) in chatState.chatMessages"
        :key="i"
      >
        {{ message.username + ': ' + message.messageBody }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import ChatMessage from '@/models/ChatMessage'
import { chatSocket } from '@/sockets/chatSocket'
import { chatState } from '@/sockets/chatSocket'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()

localStorage.setItem('userId', '1') // Temporary item for testing
const loggedInUser = JSON.parse(localStorage.getItem('userId') || 'null')

const input = ref<HTMLInputElement | null>(null)


function sendMessage() {
  const name = store.user[0].name
  const newMessage = new ChatMessage(name, 2, input.value?.value as string) // Update to get "username" and "userId" from localStorage

  chatSocket.emit('chat', newMessage)
}
</script>

<style scoped lang="scss">
ul {
  border: 1px solid black;
  padding: 1rem;

  li {
    list-style: none;
  }
}

.my-message {
  text-align: right;
}

.other-message {
  text-align: left;
}
</style>
