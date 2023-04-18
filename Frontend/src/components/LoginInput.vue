<template>
  <div>
    <form class="form-container" @submit.prevent="startPlay">
      <label class="visually-hidden" for="playerInput">Enter player name</label>
      <input
        type="text"
        name="playername"
        id="playerInput"
        placeholder="Enter player name"
        v-model="playerName"
      />
      <LoginColor class="login-color-container" />
      <button class="play-btn" type="submit">Play</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import LoginColor from './LoginColor.vue'
import { ref } from 'vue'

const playerName = ref('')

function startPlay() {
  console.log(playerName.value)
}
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

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    border: solid 1px #009576;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
}

.login-color-container {
  width: 20rem;
}

.play-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #009576;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #009193;
  }
}
</style>
