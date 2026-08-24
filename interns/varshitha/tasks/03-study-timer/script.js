let studyMinutes = 25;
let breakMinutes = 5;

let timeLeft = studyMinutes * 60;
let isRunning = false;
let mode = "study";
let timerId = null;

let sessionsCompleted =
    Number(localStorage.getItem("sessions")) || 0;

const timer = document.getElementById("timer");
const modeLabel = document.getElementById("modeLabel");
const sessionCount = document.getElementById("sessionCount");
const message = document.getElementById("message");

const studyTime = document.getElementById("studyTime");
const breakTime = document.getElementById("breakTime");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {

    if (isRunning) {
        return;
    }

    studyMinutes = Number(studyTime.value);
    breakMinutes = Number(breakTime.value);

    if (studyMinutes < 1 || breakMinutes < 1) {
        alert("Enter a time greater than 0.");
        return;
    }

    isRunning = true;

    startBtn.disabled = true;
    pauseBtn.disabled = false;

    timerId = setInterval(function() {

        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            switchMode();
        }

    }, 1000);
}

function pauseTimer() {

    clearInterval(timerId);

    isRunning = false;

    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {

    clearInterval(timerId);

    isRunning = false;

    studyMinutes = Number(studyTime.value);
    breakMinutes = Number(breakTime.value);

    if (studyMinutes < 1 || breakMinutes < 1) {
        alert("Enter a time greater than 0.");
        return;
    }

    if (mode === "study") {
        timeLeft = studyMinutes * 60;
    } else {
        timeLeft = breakMinutes * 60;
    }

    startBtn.disabled = false;
    pauseBtn.disabled = true;

    updateTimer();
}

function switchMode() {

    clearInterval(timerId);

    isRunning = false;

    if (mode === "study") {

        mode = "break";
        timeLeft = breakMinutes * 60;

        modeLabel.textContent = "BREAK TIME";

        message.textContent =
            "☕ Great work! Take a short break.";

        document.body.classList.add("break-mode");

        alert("Study time is over! Time for a break.");

    } else {

        mode = "study";
        timeLeft = studyMinutes * 60;

        sessionsCompleted++;

        localStorage.setItem(
            "sessions",
            sessionsCompleted
        );

        modeLabel.textContent = "STUDY TIME";

        message.textContent =
            "📚 Stay focused and keep learning!";

        document.body.classList.remove("break-mode");

        alert("Break is over! Time to study.");
    }

    sessionCount.textContent = sessionsCompleted;

    startBtn.disabled = false;
    pauseBtn.disabled = true;

    updateTimer();
}

function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timer.textContent = minutes + ":" + seconds;
}

document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {

        event.preventDefault();

        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    }
});

sessionCount.textContent = sessionsCompleted;
pauseBtn.disabled = true;

updateTimer();