<script setup>
import { RouterLink } from 'vue-router'
import { getBands } from '../data.js'
</script>

<template>
  <br>
  <hr>
  <div>
    <br>
    <hr>
    <br>
      <h1 v-for="(band, id) in getBands()">
        <RouterLink :to="`/${id}`">{{ band }}</RouterLink>
      </h1>
      <hr>
  </div>
  <br>
  <hr>
</template>
<style scoped>
div {
  text-align: center;
}
</style>