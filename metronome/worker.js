let timerID;
self.onmessage = (e) => {
  if (e.data) timerID = setInterval(() => postMessage(0), 25);
  else clearInterval(timerID);
};
