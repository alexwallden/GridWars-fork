<template>
  <div>
    <div v-for="i in 15" :key="i" class="row">
      <span v-for="z in 10" :key="z" :ref="(el) => el && createRefs(el as ComponentPublicInstance<HTMLSpanElement>)">
        X
      </span>
    </div>
    <button @click="log">Log</button>
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue';

const rows = ref<ComponentPublicInstance<HTMLSpanElement>[][]>([])
const cells = ref<ComponentPublicInstance<HTMLSpanElement>[]>([])

const createRefs = (e: ComponentPublicInstance<HTMLSpanElement>) => {
  e && cells.value.push(e)
  if (cells.value.length === 15) {
    rows.value.push(cells.value);
    cells.value = []
  }
}

const log = () => {
  console.log(rows);
  console.log(cells);
  rows.value[0][0].style.backgroundColor = 'red';
}

</script>

<style scoped>

</style>



