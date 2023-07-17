import { Timer } from "../src/Timer.ts";
import { delay } from "https://deno.land/std@0.136.0/async/mod.ts";


const timer = new Timer(15000);

timer.

timer.onStart = () => console.log("timer started");
timer.onStop = () => console.log("timer stopped");
timer.onReset = () => console.log("timer reset");
timer.onEnd = () => console.log("timer ended");

console.log("hello world");

timer.start();

timer.checkEvents();