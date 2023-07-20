/*
    Simple example of the use of the dev-timer library that prints the time left to the timer every second
*/

const { Timer } = require('dev-timer');

// Create a new timer instance with a 15 seconds duration
const timer = new Timer(30000); 

timer.start(); // Start the timer

timer.addEventListener(1000, ()=>{
    console.log(`Time left: ${timer.formatTime(timer.timeLeft, 'ss.mss')}`);
});