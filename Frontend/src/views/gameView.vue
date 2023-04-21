<template>
<div class="top-bar">
    <div class="players">
      <PlayerInfo />
    </div>
    <div class="logo-container">
      <h1>GridWars</h1>
    </div>
</div>
  <main>
    <GameBoard class="game-board" />
    <ChatWindow class="chat-window" />
  </main>
</template>

<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import PlayerInfo from '../components/PlayerInfo.vue'
import { usersState } from '@/sockets/usersSocket'
//import type User from '@/models/User';
// import { useUserStore } from '@/stores/userStore'
// const store = useUserStore()
// console.log(store.user)

console.log(usersState.users) 
</script>

<style lang="scss" scoped>
  main {
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .game-board {
    padding: 1rem;
  }
  .chat-window {
    width: 23.4vw;
  }
  .logo-container {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top-bar {
    display: flex;
    width: 100%;
    border: 1px solid black;
  }
  .players {
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>