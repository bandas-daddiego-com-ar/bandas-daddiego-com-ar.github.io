<script setup>
import { RouterLink } from 'vue-router';
import { getBands } from '../data.js';
</script>

<template>
  <div>
    <RouterLink to="/metronome" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate">Metrónomo</button>
    </RouterLink>
    <hr />
    <h1>Listas</h1>
    <hr class="hrshort" />
    <RouterLink v-for="(band, id) in getBands()" :to="`/${id}`" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate">
        {{ band }}
      </button>
    </RouterLink>
  </div>
</template>
<style scoped>
div {
  margin: 0 5vw;
}
h1 {
  margin: 0 0 0 0;
  color: #d9d9d9;
  font-size: 4vh;
  text-align: center;
}
button {
  margin: 5vh 0;
  background-color: #11191f;
  border-color: #1d2e3b;
  border-width: 3px;
  border-radius: 15px;
  font-size: 4vh;
  min-height: 15vh;
  text-align: center;
  color: #d9d9d9;
}
.hrshort {
  margin-left: 30vw;
  margin-right: 30vw;
}
</style>
