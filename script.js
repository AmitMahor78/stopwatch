let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

document.getElementById('start-button').addEventListener('click', startStopwatch);
document.getElementById('stop-button').addEventListener('click', stopStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);

function startStopwatch() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    updateDisplay();
  }, 1000);
  document.getElementById('start-button').disabled = true;
  document.getElementById('stop-button').disabled = false;
}

function stopStopwatch() {
  clearInterval(intervalId);
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
}

function resetStopwatch() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
}

function updateDisplay() {
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
