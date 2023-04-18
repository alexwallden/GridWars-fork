<template>
  <section class="chat-container">
    <div class="chat-messages"></div>
    <input class="chat-input" id="inputText" type="text" />
    <button class="chat-input-btn" @click="sendMessage">Send</button>
  </section>
</template>

<script setup lang="ts">
  import {socket} from '../socket.ts';
  import { ref } from "vue";

  
  function sendMessage() {
    const message = (document.getElementById("inputText") as HTMLInputElement).value;
    
    socket.emit("chat", message)
  }
  
</script>

<style scoped>

</style>
