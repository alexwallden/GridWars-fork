<template>
  <div>
    <form>
      <label class="visually-hidden" for="playerInput">Enter player name</label>
      <input type="text" name="playername" id="playerInput" placeholder="Enter player name" />
      <LoginColor />
      <button class="play-btn" type="submit" @submit.prevent>Play</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import LoginColor from './LoginColor.vue'
</script>

<style lang="scss" scoped>
.visually-hidden {
  position: absolute;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
