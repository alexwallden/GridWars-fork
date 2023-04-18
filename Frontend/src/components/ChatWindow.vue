<template>
  <section class="chat-container">
    <div class="chat-messages"></div>
    <input class="chat-input" id="inputText" type="text" />
    <button class="chat-input-btn" @click="sendMessage">Send</button>
    <ul>
      <li v-for="(message, i) in chatState.chatMessages" :key="i">
        {{ message.messageBody }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import { chatSocket } from '@/sockets/chatSocket';
  import { chatState } from '@/sockets/chatSocket';
  
  function sendMessage() {
    const message = (document.getElementById("inputText") as HTMLInputElement).value;
    
    chatSocket.emit("chat", {messageBody: message})
  }
  
</script>

<style scoped>

</style>
