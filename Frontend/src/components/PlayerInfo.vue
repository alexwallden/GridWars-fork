<template>
    <div class="player-info-container">
        <h3 class="player-name">{{ playerName }}</h3>
        <p class="player-color">color</p>
    </div>

</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

const store = useUserStore()

const playerName = store.users[0].name
const PlayerColor = store.users[0].color
const PlayerColorCss = ref(PlayerColor)

</script>

<style scoped lang="scss">
.player-color {
    color: v-bind(PlayerColorCss);
}

</style>