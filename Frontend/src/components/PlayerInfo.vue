<template>
    <div class="player-info-container">
        <h3 class="player-name">{{ playerName }}</h3>
        <div class="player-color"></div>
    </div>

</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

const store = useUserStore()

const playerName = store.user[0].name
const PlayerColor = store.user[0].color
const PlayerColorCss = ref(PlayerColor)

</script>

<style scoped lang="scss">
.player-info-container {
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    h3 {
        text-align: center;
    }
}
.player-color {
    background-color: v-bind(PlayerColorCss);
    width: 100%;
    height: 10vh;
}

</style>