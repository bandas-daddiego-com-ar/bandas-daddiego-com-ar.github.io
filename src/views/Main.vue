<script setup>
import { RouterLink } from 'vue-router'
import { getBands } from '../data.js'
</script>

<template>
  <li v-for="(band, id) in getBands()">
    <RouterLink :to="`/${id}`">{{ band }}</RouterLink>
  </li>
</template>
