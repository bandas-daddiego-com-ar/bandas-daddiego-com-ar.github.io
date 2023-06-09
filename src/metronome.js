export class Metronome {
  static minTempo = 50;
  static maxTempo = 250;

  constructor(currentTempoRef) {
    this.audioBuffer = null;
    this.audioContext = null;
    this.currentTempoRef = currentTempoRef;
    this.nextNoteTime = 0;
    this.timerWorker = new Worker('/metronome/worker.js');
    this.timerWorker.onmessage = () => this.schedule();
  }

  schedule() {
    while (this.nextNoteTime < this.audioContext.currentTime + 0.1) {
      this.play(this.audioBuffer, this.nextNoteTime);
      this.nextNoteTime += 60 / this.normalizeTempo(this.currentTempoRef.value);
    }
  }

  normalizeTempo(tempo) {
    tempo = parseInt(tempo);
    return tempo < Metronome.minTempo
      ? Metronome.minTempo
      : tempo > Metronome.maxTempo
      ? Metronome.maxTempo
      : tempo;
  }

  async initAudio() {
    if (!this.audioContext) this.audioContext = new window.AudioContext();
    if (!this.audioBuffer)
      this.audioBuffer = await fetch('/metronome/b.mp3')
        .then((res) => res.arrayBuffer())
        .then((buffer) => this.audioContext.decodeAudioData(buffer));
    this.play(this.audioContext.createBuffer(1, 1, 22050));
  }

  play(buffer, when = 0) {
    let node = new AudioBufferSourceNode(this.audioContext, { buffer: buffer });
    node.connect(this.audioContext.destination);
    node.start(when);
  }

  start() {
    this.initAudio();
    this.nextNoteTime = this.audioContext.currentTime;
    this.timerWorker.postMessage(true);
  }

  stop() {
    this.timerWorker.postMessage(false);
  }

  terminate() {
    this.timerWorker.postMessage(false);
    this.timerWorker.removeEventListener;
    this.timerWorker.terminate;
    this.timerWorker = null;
  }
}

export default Metronome;
