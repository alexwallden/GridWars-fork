<template>
  <div @mousedown="() => (mouseDown = true)" @mouseup="() => (mouseDown = false)">
    <div v-for="(n, i) in boardSize.rows" :key="i" class="row">
      <span
        v-for="(v, z) in boardSize.columns"
        :key="z"
        class="cell"
        @mousedown="() => changeColor(i, z)"
        @mouseover="() => mouseDown && changeColor(i, z)"
        :ref="(el) => cells[i][z] = el as HTMLSpanElement"
      >
      </span>
    </div>
    <button @click="() => gameSocket.emit('game-reset')">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance, watch } from 'vue'
import { gameSocket, gameState } from '../sockets/gameSocket'
import { useUserStore } from '@/stores/userStore'
import ColorChangeEmitBody from '@/models/ColorChangeEmitBody'

const user = useUserStore().$state.user[0]

const mouseDown = ref(false) // För att fylla i cellerna om man håller ned musknappen
const boardSize = ref({ rows: 15, columns: 20 }) // Bestämmer hur många rader och kolumner som ska renderas i <template>

watch(() => gameState.latestColorChange, () => {
  // Ändrar cellens färg när det kommer in en emit, gameState ligger i gameSocket.ts
  const {
    latestColorChange: { i, z, color }
  } = gameState
  cells.value[i][z].style.backgroundColor = color
})

watch(() => gameState.reset, () => {
  cells.value.forEach((row) => {
    row.forEach((cell) => {
      cell.style.backgroundColor = 'white'
    })
  })
  gameState.reset = false;
})

const create2dArrays = (numberOfRows: number) => {
  // För att förvara referenser till cell-elementen
  const parentArr: HTMLSpanElement[][] = []
  for (let i = 0; i < numberOfRows; i++) {
    const arrToPush: HTMLSpanElement[] = []
    parentArr.push(arrToPush)
  }
  return parentArr
}

const cells = ref(create2dArrays(boardSize.value.rows))

const changeColor = (i: number, z: number) => {
  gameSocket.emit('color-change', new ColorChangeEmitBody(i, z, user.color))
}
</script>

<style lang="scss" scoped>
.cell {
  display: inline-block;
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-right: 5px;
  border: 1px solid black;
}
</style>
