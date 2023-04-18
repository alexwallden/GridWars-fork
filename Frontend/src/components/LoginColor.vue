<template>
  <div>
    <label class="visually-hidden" for="color-picker">Välj din färg</label>
    <select :class="selectColor" name="color picker" id="color-picker" @change="setSelectedColor">
      <option value="" class="option">Välj din färg</option>
      <option value="option-one" class="option-one"></option>
      <option value="option-two" class="option-two"></option>
      <option value="option-three" class="option-three"></option>
      <option value="option-four" class="option-four"></option>
      <option value="option-five" class="option-five"></option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectColor = ref('')

function setSelectedColor(e: any) {
  console.log(e.currentTarget.value)
  selectColor.value = e.currentTarget.value
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

select {
  cursor: pointer;
}

option:hover {
  cursor: tr;
}
.option-one {
  background-color: #0074cc;
}

.option-two {
  background-color: #ff0000;
}

.option-three {
  background-color: #00ff00;
}

.option-four {
  background-color: #ffff00;
}

.option-five {
  background-color: #57076b;
}
</style>
