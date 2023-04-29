let timerID;
self.onmessage = (e) => {
	if (e.data)
		timerID = setInterval(() => postMessage(null), 25);
	else
		clearInterval(timerID);
}