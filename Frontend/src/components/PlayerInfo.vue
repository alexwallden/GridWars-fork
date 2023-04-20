<template>
    <div class="player-info-container">
        <h3 class="player-name">{{ props.playerName }}</h3>
        <p class="player-color" :style="{ backgroundColor: props.playerColor }"> {{ props.playerColor }}</p>
    </div>

</template>

<script setup lang="ts">

const props = defineProps({
  playerName: String,
  playerColor: String,
  playerId: String
})

</script>

<style scoped lang="scss">
.player-info-container {
    margin-bottom: 10px;

}
.player-color {
    background-color: white;
    width: 75px;
    height: 25px;
}

</style>