<template>
  <section class="chat-container">
    <div class="chat-messages"></div>
    <input class="chat-input" ref="input" id="inputText" type="text" />
    <button class="chat-input-btn" @click="sendMessage">Send</button>
    <ul>
      <li
        v-for="(message, i) in chatState.chatMessages"
        :class="message.userId === loggedInUser ? 'my-message' : 'other-message'"
        :style="{ backgroundColor: message.userColor }"
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

localStorage.setItem('userId', store.user[0].id) // Temporary item for testing
const loggedInUser = localStorage.getItem('userId') || 'null'

const input = ref<HTMLInputElement | null>(null)


function sendMessage() {
  const name = store.user[0].name
  const id = store.user[0].id
  const color = store.user[0].color
  const newMessage = new ChatMessage(name, color, id, input.value?.value as string) // Update to get "username" and "userId" from localStorage

  chatSocket.emit('chat', newMessage)
}
</script>

<style scoped lang="scss">
ul {
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
  }
}

.my-message {
  align-self: flex-end;
  text-align: right;
  width: fit-content;
}

.other-message {
  align-self: flex-start;
  text-align: left;
  width: fit-content;
}
</style>
