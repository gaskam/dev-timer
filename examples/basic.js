/*  
    This is a basic example of the dev-timer library that prints a message when the timer ends(after 15 seconds).
*/

const { Timer } = require('dev-timer');

// Create a new timer instance with a 15 seconds duration
const timer = new Timer(15000); 

timer.start(); // Start the timer

// Add a callback to be called when the timer ends
timer.onEnd = ()=>{
    console.log('Timer ended');
}