<template>
    <div class="player-info-container">
        <h3 class="player-name">{{ playerName }}</h3>
        <p class="player-color">{{ PlayerColor }}</p>
    </div>

</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'


const store = useUserStore()

const playerName = store.users[0].name
const PlayerColor = store.users[0].color

</script>

<style>

</style>