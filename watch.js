let startTime, updatedTime, difference, timerInterval;
let running = false;
let display = document.getElementById('display');
let laps = document.getElementById('laps');

function updateDisplay(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
  if (!running) {
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(() => {
      difference = Date.now() - startTime;
      updateDisplay(difference);
    }, 10);
    running = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  running = false;
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  updateDisplay(0);
  laps.innerHTML = '';
}

function lap() {
  if (running) {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
}
