<template>
    <main class="main-container">
      <h1 class="heading">Result</h1>
      <gameResult class="main-container" /> 
    </main>
  </template>
  
  <script setup lang="ts">
  import gameResult from '@/components/gameResult.vue'
  </script>
  
  <style lang="scss" scoped>
  .main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .heading {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  </style>