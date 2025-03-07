import playNotificationSound from './notifications.js';

let timer;
let isRunning = false;
let timeLeft = 0;
let workTime = 25 * 60;
let breakTime = 5 * 60;
let isWorkSession = true;
let currentTask = null;

export function startTimer() {
    if (isRunning) return;
    isRunning = true;

    if (timeLeft === 0) {
        timeLeft = isWorkSession ? workTime : breakTime;
    }

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            playNotificationSound();
            isWorkSession = !isWorkSession;
            timeLeft = isWorkSession ? workTime : breakTime;
            currentTask = isWorkSession ? getCurrentTask() : null;
            updateDisplay();
        }
    }, 1000);
}

export function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

export function resetTimer() {
    pauseTimer();
    isWorkSession = true;
    workTime = document.getElementById('workTime').value * 60;
    breakTime = document.getElementById('breakTime').value * 60;
    timeLeft = workTime;
    currentTask = null;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('currentTask').textContent = currentTask ? `Current Task: ${currentTask}` : '';
}

function getCurrentTask() {
    const taskSelect = document.getElementById('taskSelect');
    return taskSelect.options[taskSelect.selectedIndex]?.text || null;
}
