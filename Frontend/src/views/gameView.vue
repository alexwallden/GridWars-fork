<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import PlayerInfo from '../components/PlayerInfo.vue'
import { usersState } from '@/sockets/usersSocket'
// import { useUserStore } from '@/stores/userStore'
// const store = useUserStore()
// console.log(store.user)

console.log(usersState.users)
</script>

<template>
  <div>
    <h1>gameview</h1>
    <PlayerInfo />
    <ChatWindow />
    <GameBoard />
  </div>
</template>

<style lang="sass" scoped></style>
