<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { socket } from '@/socket'

const resetAll = () => {
  socket.emit('reset-all');
}

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
