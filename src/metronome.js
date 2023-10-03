export class Metronome {
  static minTempo = 50;
  static maxTempo = 250;
  static sound = atob(
    '//sQxAAABCAU94CEYECzEiUWhiABiAAKQDEkAZSlWGEBZtA0VoA5zQZ7+gB/9LhVOKhwE2fpAD+G77+EEGnpTd1zorsBiPOjH5z6oBiz/5wMDFvp6w4t3DP/9yRxGAiB9RHB8iYzm7j/+xLEAoAFQJteGTaAAJQILsMewABtgHFvgFTJLwU8Ch/loKWXP9ZKIN/5upBP//YzNy+f/L4f/4IOtG+tdFBcqEBuVQKFpZYm/2Ry3piOhldCN5KT0nK03/1P/Zbq7d66HZE29GAAzlf/+xDEBQBFZLuFvJKAMKaXMDQWHH6KGKqBMYaJmvGO0Qwa6B4JAnL/Ud/t//iJn8hV//9RAWUP5Dv6hHbw8vYK3uEqIXuIfmTFanTZ924PBn/6C/0///lrzjhsr39v/HkWwB5shyFgAf/7EsQEAAWou22084AwnAnqgzDQAP/N5V03ahj3WZ4O38dh0HxJnniOEr/+oieJub//o3zf//oo+MI7nI34x03AfInuWeq1ZHhG8sNy86sHsOFwbpLFi19Obpgn62O/s+VVJQOBCQLYMP/7EMQDgANkAQ28AYAgvItZGDANQAC3FrSU32Tv1nZZ+DXix71hr/I3gLJaQNQoCpRmUte9VROagIEBH1ekokMKVSDMGsSnanlYdJQmAnlREs6VcC0Fa+VVTEFNRTMuMTAwVVVVVVVV'
  );

  constructor(currentTempoRef) {
    this.audioBuffer = null;
    this.audioContext = null;
    this.currentTempoRef = currentTempoRef;
    this.nextNoteTime = 0;
    this.timerWorker = new Worker('/worker.js');
    this.timerWorker.onmessage = () => this.schedule();

    const soundBytes = new Uint8Array(Metronome.sound.length);
    for (var i = 0; i < Metronome.sound.length; i++) {
      soundBytes[i] = Metronome.sound.charCodeAt(i);
    }
    this.soundRawBuffer = soundBytes.buffer;
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
      this.audioBuffer = await this.audioContext.decodeAudioData(this.soundRawBuffer);
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
