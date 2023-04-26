<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { socket } from '@/socket'
import axios from 'axios'
import { onMounted } from 'vue'

const resetAll = () => {
  socket.emit('clear-everything')
}

socket.connect()

const testFetch = async () => {
  // const response = await fetch('https://stingray-app-wj9j7.ondigitalocean.app');
  // console.log(response);
  // const data = await response.json();
  // console.log(data);
  console.log('Fetchar...')

  const { data } = await axios.get('https://gridwars-backend-gs9kh.ondigitalocean.app/test')
  console.log(data)
}
// socket.connect()
// testFetch()
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
