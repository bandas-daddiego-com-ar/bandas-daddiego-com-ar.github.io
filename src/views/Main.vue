<script setup>
import { RouterLink } from 'vue-router'
import { getBands } from '../data.js'
</script>

<template>
  <div>
    <RouterLink v-for="(band, id) in getBands()" :to="`/${id}`" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate">
        {{ band }}
      </button>
    </RouterLink>
  </div>
</template>
<style scoped>
div {
  margin: 10vh 5vw;
}
button {
  margin: 10vh 0;
  background-color: #11191f;
  border-color: #1d2e3b;
  border-width: 3px;
  border-radius: 15px;
  font-size: 5vh;
  min-height: 15vh;
  text-align: center;
  color: #d9d9d9;
}
</style>