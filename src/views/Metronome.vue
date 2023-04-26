<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSongs } from '../data.js'

let audioBuffer;
let audioContext;
let nextNoteTime = 0;
let currentSong = 0;
const songList = getSongs(useRoute().params.band);
const songListLength = songList.length;
const currentName = ref(songList[currentSong][0]);
const currentTempo = ref(songList[currentSong][1]);
const isPlaying = ref(false);
const scheduleAheadTime = 0.1;
const timerWorker = new Worker('/worker.js');

function schedule() {
    while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
        play(audioBuffer, nextNoteTime);
        nextNoteTime += (60 / currentTempo.value);
    }
}

async function initAudio() {
    if (!audioContext)
        audioContext = new window.AudioContext();
    if (!audioBuffer)
        audioBuffer = await fetch('/sounds/b.mp3')
            .then(res => res.arrayBuffer())
            .then(buffer => audioContext.decodeAudioData(buffer));
    play(audioContext.createBuffer(1, 1, 22050));
}

function play(buffer, when = 0) {
    let node = new AudioBufferSourceNode(audioContext, { 'buffer': buffer });
    node.connect(audioContext.destination);
    node.start(when);
}

function start() {
    initAudio();
    nextNoteTime = audioContext.currentTime;
    timerWorker.postMessage('play');
    isPlaying.value = true;
}

function stop() {
    timerWorker.postMessage('stop');
    isPlaying.value = false;
}

function loadSong() {
    [currentName.value, currentTempo.value] = songList[currentSong];
}

function setSong(index) {
    currentSong = index;
    loadSong();
}

function next() {
    currentSong++;
    if (currentSong === songListLength)
        currentSong = 0;
    loadSong();
}

function prev() {
    currentSong--;
    if (currentSong === -1)
        currentSong = songListLength - 1;
    loadSong();
}

timerWorker.onmessage = () => schedule();

</script>

<template>
    <div class="sticky">
        <span class="btn-group">
            <button class="prev" @click="prev();"><i class="fa fa-step-backward"></i></button>
            <button class="next" @click="next();"><i class="fa fa-step-forward"></i></button>
            <button class="playStop stop" v-show="isPlaying" @click="stop();"><i class="fa fa-stop"></i></button>
            <button class="playStop play" v-show="!isPlaying" @click="start();"><i class="fa fa-play"></i></button>
        </span>
        <table id="headerTable">
            <tr>
                <td style="width: 25%">{{ currentSong + 1 }}-{{ songListLength }}</td>
                <td style="width: 55%">{{ currentName }}</td>
                <td style="width: 20%">{{ currentTempo }}</td>
            </tr>
        </table>
    </div>
    <table id="listTable">
        <tr v-for="(song, index) in songList" @click="setSong(index)">
            <td>{{ index + 1 }}</td>
            <td>{{ song[0] }}</td>
            <td>{{ song[1] }}</td>
        </tr>
    </table>
</template>
<style scoped>
#headerTable td {
    font-size: 2em;
    font-weight: bold;
    color: white;
    text-align: center;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
}

#listTable td {
    font-size: 1.8em;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
}

.btn-group:after {
    content: "";
    clear: both;
    display: table;
}

button {
    margin: 1%;
    float: left !important;
    font-size: 3em;
    border-radius: 0.3em;
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

body,
table {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

.sticky {
    position: sticky;
    top: 0;
    background-color: black;
}
</style>