<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { socket } from '@/socket'

const resetAll = () => {
  socket.emit('clear-everything');
}

const testFetch = async () => {
  const response = await fetch('https://stingray-app-wj9j7.ondigitalocean.app');
  console.log(response);
  const data = await response.json();
  console.log(data);
}

testFetch()

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/game">Game</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
  <button @click="resetAll">Reset all</button>
</template>

<style lang="sass" scoped></style>
