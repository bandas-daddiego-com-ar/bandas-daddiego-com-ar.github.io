<script setup>
import { ref, onBeforeUnmount } from 'vue';
import Metronome from '../metronome.js';

const isPlaying = ref(false);
const currentTempo = ref(120);
const metronome = new Metronome(currentTempo);
let avgTap = 120;
let prevTapTime = 0;

onBeforeUnmount(() => metronome.terminate());

function start() {
  metronome.start();
  isPlaying.value = true;
}

function stop() {
  metronome.stop();
  isPlaying.value = false;
}

function tap() {
  const now = Date.now();
  if (now - prevTapTime > 2000) {
    prevTapTime = now;
    avgTap = 0;
    return;
  }
  avgTap = (avgTap + now - prevTapTime) / 2;
  prevTapTime = now;
  setTempo(60000 / avgTap);
}

function setTempo(tempo) {
  currentTempo.value = metronome.normalizeTempo(tempo);
}
</script>
<template>
  <br />
  <hr />
  <h1>Metrónomo</h1>
  <hr />
  <main>
    <button class="big tap" @click="tap()">TAP</button>
    <input
      class="big"
      min="50"
      max="250"
      type="number"
      v-model="currentTempo"
      @focusout="setTempo($event.target.value)"
    />
    <button class="big stop" v-show="isPlaying" @click="stop()">
      <i class="fa fa-stop"></i>
    </button>
    <button class="big play" v-show="!isPlaying" @click="start()">
      <i class="fa fa-play"></i>
    </button>
  </main>
</template>
<style scoped>
h1 {
  margin: 0;
  font-size: 3em;
  color: #d9d9d9;
  text-align: center;
}
.big {
  font-size: 3em;
  border-radius: 0.3em;
  color: #d9d9d9;
  background-color: #11191f;
  border-color: #1d2e3b;
}
input {
  padding: 7vh 0 !important;
  text-align: center;
}
.play {
  background-color: #006400 !important;
}
.stop {
  background-color: #b22222 !important;
}
.tap {
  background-color: darkcyan;
}
</style>
