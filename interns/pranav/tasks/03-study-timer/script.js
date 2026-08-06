let studyDuration = 25 * 60;
let breakDuration = 5 * 60;

let timeLeft = studyDuration;
let isRunning = false;
let mode = "study";
let sessionsCompleted = 0;
let timerInterval = null;

const timer = document.getElementById("timer");
const modeLabel = document.getElementById("modeLabel");
const timerCircle = document.getElementById("timerCircle");
const sessions = document.getElementById("sessions");

const studyInput = document.getElementById("studyTime");
const breakInput = document.getElementById("breakTime");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    sessions.textContent = sessionsCompleted;
}

function loadDurations() {

    studyDuration = Number(studyInput.value) * 60;
    breakDuration = Number(breakInput.value) * 60;

    if (studyDuration <= 0 || breakDuration <= 0) {
        alert("Please enter valid durations.");
        return false;
    }

    return true;
}

function startTimer() {

    if (isRunning) return;

    if (mode === "study" && timeLeft === studyDuration ||
        mode === "break" && timeLeft === breakDuration) {

        if (!loadDurations()) return;

        if (mode === "study") {
            timeLeft = studyDuration;
        } else {
            timeLeft = breakDuration;
        }

        updateDisplay();
    }

    isRunning = true;

    studyInput.disabled = true;
    breakInput.disabled = true;

    startBtn.disabled = true;
    pauseBtn.disabled = false;

    timerInterval = setInterval(() => {

        if (timeLeft > 0) {

            timeLeft--;

            updateDisplay();

        } else {

            clearInterval(timerInterval);

            isRunning = false;

            if (mode === "study") {

                alert("Study session completed! Take a break.");

                mode = "break";

                modeLabel.textContent = "☕ Break Time";

                timerCircle.classList.remove("study");
                timerCircle.classList.add("break");

                timeLeft = breakDuration;

            } else {

                alert("Break finished! Back to study.");

                mode = "study";

                sessionsCompleted++;

                modeLabel.textContent = "📚 Study Time";

                timerCircle.classList.remove("break");
                timerCircle.classList.add("study");

                timeLeft = studyDuration;

            }

            updateDisplay();

            studyInput.disabled = false;
            breakInput.disabled = false;

            startBtn.disabled = false;
            pauseBtn.disabled = true;

        }

    }, 1000);

}

function pauseTimer() {

    clearInterval(timerInterval);

    isRunning = false;

    studyInput.disabled = false;
    breakInput.disabled = false;

    startBtn.disabled = false;
    pauseBtn.disabled = true;

}

function resetTimer() {

    clearInterval(timerInterval);

    isRunning = false;

    studyInput.disabled = false;
    breakInput.disabled = false;

    loadDurations();

    if (mode === "study") {

        timeLeft = studyDuration;

    } else {

        timeLeft = breakDuration;

    }

    updateDisplay();

    startBtn.disabled = false;
    pauseBtn.disabled = true;

}

studyInput.addEventListener("change", () => {

    if (!isRunning && mode === "study") {

        loadDurations();

        timeLeft = studyDuration;

        updateDisplay();

    }

});

breakInput.addEventListener("change", () => {

    if (!isRunning && mode === "break") {

        loadDurations();

        timeLeft = breakDuration;

        updateDisplay();

    }

});

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

updateDisplay();