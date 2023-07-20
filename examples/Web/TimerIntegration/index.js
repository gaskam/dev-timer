import { Timer } from "../../../ES/Timer.js";

const timer = new Timer(20000);

window.onload = () => {
    // Get the display elements for the timer
    let seconds = document.getElementById("seconds");

    // Get the start, stop and reset buttons
    let [start, stop, reset] = [document.getElementById("start"), document.getElementById("stop"), document.getElementById("reset")];

    // Make the timer display his time left when calling this function
    function updateTimer() {
        // Update the display elements
        let secondsLeft = timer.formatTime(timer.timeLeft, 'ss:ms');
        seconds.innerText = secondsLeft;
    }

    timer.addEventListener(50, updateTimer);

    start.addEventListener("click", () => {
        timer.start();
        updateTimer();
    });

    stop.addEventListener("click", () => {
        timer.stop();
        updateTimer();
    });

    reset.addEventListener("click", () => {
        timer.reset();
        updateTimer();
    });

    timer.start();
};