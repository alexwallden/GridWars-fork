<template>
    <div class="player-info-container">
        <h3 class="player-name">{{ playerName }}</h3>
        <p class="player-color"></p>
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
.player-info-container {
    margin-bottom: 10px;

}
.player-color {
    background-color: v-bind(PlayerColorCss);
    width: 75px;
    height: 25px;
}

</style>