const container = document.getElementById("container");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let msecs = 0;
let secs = 0;
let mins = 0;
let timerId = null;
startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});
resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  container.innerHTML = `00:00:00`;
  msecs = secs = mins = 0;
});

function startTimer() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }
  let msecStr = msecs < 10 ? "0" + msecs : msecs;
  let secsStr = secs < 10 ? "0" + secs : secs;
  let minsStr = mins < 10 ? "0" + mins : mins;
  container.innerHTML = `${minsStr}:${secsStr}:${msecStr}`;
}
