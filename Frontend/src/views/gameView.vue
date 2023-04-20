<template>
  <div>
    <h1 class="gameview">Gameview</h1>
    <PlayerInfo />
    <ChatWindow />
    <GameBoard />
  </div>
</template>

<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import PlayerInfo from '../components/PlayerInfo.vue'
import { userState } from '@/sockets/userSocket'
// import { useUserStore } from '@/stores/userStore'
// const store = useUserStore()
// console.log(store.user)

console.log(userState.user)
</script>



<style lang="scss" scoped>
.gameview {
  text-align: center;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 3rem;
}


</style>

