let totalSeconds = 25 * 60;
let currentSeconds = totalSeconds;
let timerId = null;
let isRunning = false;

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

function renderTime() {
    const minutes = String(Math.floor(currentSeconds / 60)).padStart(2, "0");
    const seconds = String(currentSeconds % 60).padStart(2, "0");
    timerEl.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;

    timerId = setInterval(() => {
        if (currentSeconds > 0) {
            currentSeconds -= 1;
            renderTime();
        } else {
            clearInterval(timerId);
            isRunning = false;
            alert("뽀모도로 종료!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    currentSeconds = totalSeconds;
    renderTime();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

renderTime();