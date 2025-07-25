let seconds = 0, minutes = 0, hours = 0;
let running = false;
let interval;

function updateDisplay() {
  const pad = (n) => String(n).padStart(2, '0');
  document.getElementById('timer').textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startTimer() {
  if (running) return;
  running = true;
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  running = false;
}

function resetTimer() {
  pauseTimer();
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
}

updateDisplay();
