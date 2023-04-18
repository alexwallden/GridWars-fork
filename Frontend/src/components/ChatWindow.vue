<template>
  <section class="chat-container">
    <div class="chat-messages"></div>
    <input class="chat-input" ref="input" id="inputText" type="text" />
    <button class="chat-input-btn" @click="sendMessage">Send</button>
    <ul>
      <li v-for="(message, i) in chatState.chatMessages" :key="i">
        {{ message.messageBody }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import ChatMessage from '@/models/ChatMessage';
  import { chatSocket } from '@/sockets/chatSocket';
  import { chatState } from '@/sockets/chatSocket';
  import { ref } from 'vue';

  chatSocket.connect();
  const input = ref<HTMLInputElement | null>(null)
  console.log(input);
  
  function sendMessage() {
    const newMessage = new ChatMessage("Nicholas", 1, input.value?.value as string)
    
    chatSocket.emit("chat", newMessage)
    // console.log(newMessage);
    // console.log("chatState: ", chatState.chatMessages);
    console.log(chatState.chatMessages);
  }

</script>

<style scoped>

</style>
