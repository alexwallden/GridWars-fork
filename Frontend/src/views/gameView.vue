<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import PlayerInfo from '../components/PlayerInfo.vue'
import { userState } from '@/sockets/userSocket'
//import type User from '@/models/User';
// import { useUserStore } from '@/stores/userStore'
// const store = useUserStore()
// console.log(store.user)

console.log(userState.user) 

</script>

<template>
  <div>
    <h1>gameview</h1>
    <PlayerInfo
    v-for="(user, index) in userState.user[userState.user.length-1]"
    :playerName="user.name"
    :playerColor="user.color"
    :key="index"
    />
    <ChatWindow />
    <GameBoard />
  </div>
</template>

<style lang="sass" scoped></style>
