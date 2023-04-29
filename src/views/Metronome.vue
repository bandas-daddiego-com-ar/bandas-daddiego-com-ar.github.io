<script setup>
import { ref, onBeforeUnmount } from 'vue'
import Metronome from '../metronome.js'

const isPlaying = ref(false);
const currentTempo = ref(120)
const metronome = new Metronome(currentTempo);
let avgTap = currentTempo.value;
let prevTapTime = 0;

onBeforeUnmount(() => metronome.terminate())

function start() {
  metronome.start();
  isPlaying.value = true;
}

function stop() {
  metronome.stop();
  isPlaying.value = false;
}

function tap(){
    const now = Date.now() / 1000;
    if (now - prevTapTime > 2) {
        prevTapTime = now;
        avgTap = 0;
        return;
    }
    avgTap = (avgTap + (60 / (now - prevTapTime))) / 2;
    prevTapTime = now;
    setTempo(avgTap);
}

function setTempo(tempo){
  currentTempo.value = metronome.normalizeTempo(tempo);
}
</script>
<template>
  <main>
    <input class="big" min="50" max="250" type="number"
      v-model="currentTempo" @focusout="setTempo($event.target.value)">
    <button class="big tap" @click="tap()">
      TAP
    </button>
    <button class="big stop" v-show="isPlaying" @click="stop()">
      <i class="fa fa-stop"></i>
    </button>
    <button class="big play" v-show="!isPlaying" @click="start()">
      <i class="fa fa-play"></i>
    </button>
  </main>
</template>
<style scoped>
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
</style>