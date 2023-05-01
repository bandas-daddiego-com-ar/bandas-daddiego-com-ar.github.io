<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { getSongs } from '../data.js';
import Metronome from '../metronome.js';

const songs = getSongs(useRoute().params.songListIndex);
const songsLen = songs.length;
const currentSong = ref(0);
const isPlaying = ref(false);
const currentName = ref(songs[0][0]);
const currentTempo = ref(songs[0][1]);
const metronome = new Metronome(currentTempo);

onBeforeUnmount(() => metronome.terminate());

function start() {
  metronome.start();
  isPlaying.value = true;
}

function stop() {
  metronome.stop();
  isPlaying.value = false;
}

function loadSong() {
  [currentName.value, currentTempo.value] = songs[currentSong.value];
}

function setSong(index) {
  currentSong.value = index;
  loadSong();
}

function next() {
  currentSong.value++;
  if (currentSong.value === songsLen) currentSong.value = 0;
  loadSong();
}

function prev() {
  currentSong.value--;
  if (currentSong.value === -1) currentSong.value = songsLen - 1;
  loadSong();
}
</script>

<template>
  <div class="sticky">
    <span class="btn-group">
      <button class="prev" @click="prev()"><i class="fa fa-step-backward"></i></button>
      <button class="next" @click="next()"><i class="fa fa-step-forward"></i></button>
      <button class="playStop stop" v-show="isPlaying" @click="stop()">
        <i class="fa fa-stop"></i>
      </button>
      <button class="playStop play" v-show="!isPlaying" @click="start()">
        <i class="fa fa-play"></i>
      </button>
    </span>
    <table id="headerTable">
      <tr>
        <td style="width: 25%">{{ currentSong + 1 }}∙{{ songsLen }}</td>
        <td style="width: 55%">{{ currentName }}</td>
        <td style="width: 20%">{{ currentTempo }}</td>
      </tr>
    </table>
  </div>
  <table id="listTable">
    <tr v-for="(song, index) in songs" @click="setSong(index)">
      <td>{{ index + 1 }}</td>
      <td>{{ song[0] }}</td>
      <td>{{ song[1] }}</td>
    </tr>
  </table>
</template>
<style scoped>
#headerTable {
  background-color: black;
}

#headerTable td {
  font-size: 1.7em;
  font-weight: bold;
  color: #d9d9d9;
  text-align: center;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
}

#listTable {
  background-color: #11191f;
}

#listTable td {
  color: #d9d9d9;
  font-size: 1.5em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
}

.btn-group:after {
  content: '';
  clear: both;
  display: table;
}

button {
  margin: 1%;
  float: left !important;
  font-size: 3em;
  border-radius: 0.3em;
  color: #d9d9d9;
  background-color: #11191f;
  border-color: #1d2e3b;
}

.prev {
  width: 20% !important;
}

.next {
  width: 54% !important;
}

.playStop {
  width: 20% !important;
}

.play {
  background-color: #006400 !important;
}

.stop {
  background-color: #b22222 !important;
}

.sticky {
  padding-top: 1vh;
  position: sticky;
  background-color: black;
  top: 0;
}
</style>
