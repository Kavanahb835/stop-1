let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);
    }
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("milliseconds").textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `0${time / 10}` : time / 10;
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (running) {
        const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
    }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
