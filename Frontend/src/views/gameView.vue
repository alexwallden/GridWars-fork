<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
import ChatWindow from '../components/ChatWindow.vue'
import PlayerInfo from '../components/PlayerInfo.vue'
import { usersState } from '@/sockets/usersSocket'
import CountDown from '@/components/CountDown.vue';
//import type User from '@/models/User';
// import { useUserStore } from '@/stores/userStore'
// const store = useUserStore()
// console.log(store.user)

console.log(usersState.users) 

</script>

<template>
  <div>
    <h1>gameview</h1>
    <CountDown />
    <PlayerInfo
    v-for="(user, index) in usersState.users"
    :playerName="user.name"
    :playerColor="user.color"
    :key="index"
    />
    <ChatWindow />
    <GameBoard />
  </div>
</template>
