<template>
    <div class="timer-container">
        <div class="timer-countdown" v-if="countdown > 0">{{ countdown }}</div>
        <div v-else>Times up = Game over!</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const START_TIME_SECONDS: number = 60
const UPDATE_INTERVAL_MILISEC: number = 1000
const countdown = ref(START_TIME_SECONDS);

const updateCountdown = () => {
countdown.value = countdown.value - UPDATE_INTERVAL_MILISEC / 1000;
};

setInterval(updateCountdown, UPDATE_INTERVAL_MILISEC);

</script>

<style scoped lang="scss">
.timer-container {
    margin-bottom: 10px;
}

.timer-countdown {
    color: black;
}

</style>