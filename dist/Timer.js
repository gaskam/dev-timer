"use strict";
// A nice, easy to use, timer, that provides powerful features
// Made with ❤️ by Gaskam -> Gaskam.dev
// Version: 0.1.8 Alpha
// Released: Event gestionnary
// TODO: Timing events triggering (on the fly)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    beginTime = null;
    pauseAmount = 0;
    pauseBegin = null;
    paused = true;
    callbacks = [];
    _timeline = [];
    specialEventsRegistry = [];
    #currentTimeout = -1;
    duration;
    #specialEvents = {
        start: [],
        stop: [],
        end: [],
        reset: [],
    };
    // Works fine, but rounds time down(1999ms -> 1s)
    /**
     * Function to help you format time
     * @param time - A time in ms
     * @param format - The format, accepted formats are: 'ms', 'ss', 'mm', 'hh', 'dd', 'ww', 'mo', 'yy', 'yyyy', and you may use multiple formats at once, for example: 'hh:mm:ss'
     * @returns The formatted time
     */
    formatTime(time, format) {
        if (format === undefined)
            return `${time}`;
        format = format.toLowerCase();
        if (format === "ms")
            return `${time}`;
        if (time < 0)
            time = 0;
        if (format.includes("yyyy")) {
            let tmp = Math.floor(time / 31536000000);
            format = format.replace("yyyy", tmp);
            time -= tmp * 31536000000; // 31 536 000 000 ms = 1 year of 365 days
        }
        else if (format.includes("yy")) {
            let tmp = Math.floor(time / 31536000000);
            format = format.replace("yy", String(tmp).slice(-2));
            time -= tmp * 31536000000; // 31 536 000 000 ms = 1 year of 365 days
        }
        if (format.includes("mo")) {
            let tmp = Math.floor(time / 2592000000);
            if (tmp < 10)
                tmp = "0" + tmp;
            format = format.replace("mo", tmp);
            time -= tmp * 2592000000; // 2 592 000 000 ms = 1 month of 30 days
        }
        if (format.includes("ww")) {
            let tmp = Math.floor(time / 604800000);
            format = format.replace("ww", tmp);
            time -= tmp * 604800000; // 604 800 000 ms = 1 week
        }
        if (format.includes("dd")) {
            let tmp = Math.floor(time / 86400000);
            if (tmp < 10)
                tmp = "0" + tmp;
            format = format.replace("dd", tmp);
            time -= tmp * 86400000; // 86 400 000 ms = 1 day
        }
        if (format.includes("hh")) {
            let tmp = Math.floor(time / 3600000);
            if (tmp < 10)
                tmp = "0" + tmp;
            format = format.replace("hh", tmp);
            time -= tmp * 3600000; // 3 600 000 ms = 1 hour
        }
        if (format.includes("mm")) {
            let tmp = Math.floor(time / 60000);
            if (tmp < 10)
                tmp = "0" + tmp;
            format = format.replace("mm", tmp);
            time -= tmp * 60000; // 60 000 ms = 1 minute
        }
        if (format.includes("ss")) {
            let tmp = Math.floor(time / 1000);
            if (tmp < 10)
                tmp = "0" + tmp;
            format = format.replace("ss", tmp);
            time -= tmp * 1000; // 1 000 ms = 1 second
        }
        if (format.includes("ms")) {
            let tmp = Math.floor(time);
            if (tmp < 100)
                tmp = "00" + tmp;
            else if (tmp < 10)
                tmp = "0" + tmp;
            format = format.replace("ms", tmp);
        }
        return format;
    }
    // Works fine, you should only provide a string with a number and a unit(ex: 1s, 1m, 1h, 1d, 1w, 1mo, 1y)
    /**
     * Ensures that the time is in ms, and if not, converts it to ms
     * @param time - The time to convert, if string, it must be in the format: 'number + unit', ex: '1s', '1m', '1h', '1d', '1w', '1mo', '1y'
     * @throws {Error} If the time string is not in the correct format
     * @returns The time converted to ms
     */
    toMs(time) {
        try {
            if (typeof time === "number") {
                return time;
            }
            if (typeof time === "string") {
                time = time.toLowerCase();
                if (time.includes("ms"))
                    return Number(time.replace("ms", ""));
                if (time.includes("ss"))
                    return Number(time.replace("ss", "")) * 1000;
                if (time.includes("mm"))
                    return Number(time.replace("mm", "")) * 60000;
                if (time.includes("hh"))
                    return Number(time.replace("hh", "")) * 3600000;
                if (time.includes("dd"))
                    return Number(time.replace("dd", "")) * 86400000;
                if (time.includes("ww"))
                    return Number(time.replace("ww", "")) * 604800000;
                if (time.includes("mo"))
                    return Number(time.replace("mo", "")) * 2592000000;
                if (time.includes("yy"))
                    return Number(time.replace("yy", "")) * 31536000000;
                if (time.includes("s"))
                    return Number(time.replace("s", "")) * 1000;
                if (time.includes("m"))
                    return Number(time.replace("m", "")) * 60000;
                if (time.includes("h"))
                    return Number(time.replace("h", "")) * 3600000;
                if (time.includes("d"))
                    return Number(time.replace("d", "")) * 86400000;
                if (time.includes("w"))
                    return Number(time.replace("w", "")) * 604800000;
                if (time.includes("y"))
                    return Number(time.replace("y", "")) * 31536000000;
            }
        }
        catch (e) {
            throw `Timer.js: unable to convert time to ms: ${e}`;
        }
        return 0;
    }
    /**
     * Create a new Timer with a duration
     * @constructor
     * @param duration - The duration of the timer, in ms
     */
    constructor(duration) {
        this.duration = duration;
    }
    // Timer length functions
    // Works fine(the 4 ones below)
    /**
     * Set the duration of the timer
     * @param duration - The duration of the timer, in ms
     */
    setDuration(duration) {
        this.duration = this.toMs(duration);
    }
    /**
     * Add a duration to the timer duration, or removes it if the duration is negative
     * @param duration - The duration to add to the timer, in ms
     */
    addDuration(duration) {
        this.duration += this.toMs(duration);
    }
    /**
     * Sets the running time of the timer(overrides the current running time)
     * @param duration - The new running time of the timer
     */
    setRunningTime(duration) {
        this.pauseAmount = this.toMs(duration);
        this.beginTime = Date.now();
    }
    /**
     * Add a duration to the running time of the timer, or removes it if the duration is negative
     * @param duration - The duration to add to the running time of the timer, in ms
     */
    addRunningTime(duration) {
        this.pauseAmount += this.toMs(duration);
    }
    // Timer execution functions
    /**
     * Gives the current running time of the timer
     */
    get runningTime() {
        if (this.paused)
            return this.pauseAmount;
        return this.pauseAmount + (Date.now() - this.beginTime);
    }
    /**
     * Gives the current time left of the timer
     */
    get timeLeft() {
        return this.duration - this.runningTime;
    }
    /**
     * Starts the timer.
     * Triggers the onStart event.
     * @returns Returns true if the timer was paused, false if not
     */
    start() {
        if (this.paused) {
            this.paused = false;
            this.beginTime = Date.now();
            if (this.pauseBegin) {
                let tmp1 = this.pauseBegin, tmp2 = this.beginTime;
                this._timeline.forEach(function (tmp) {
                    tmp[0] += tmp2 - tmp1;
                });
                this.checkEvents();
            }
            this.dispatchSpecialEvent("start");
            return true;
        }
        return false;
    }
    /**
     * Stops/pauses the timer.
     * Triggers the onStop event.
     * @returns Returns true if the timer was running, false if not
     */
    stop() {
        if (!this.paused) {
            let tmp = Date.now();
            this.pauseBegin = tmp;
            this.paused = true;
            this.pauseAmount += tmp - this.beginTime;
            this.dispatchSpecialEvent("stop");
            return true;
        }
        return false;
    }
    /**
     * Resets the timer to its initial state but keeps the events.
     * If you want to reset completely, just create a new timer.
     * Trigger the onReset event.
     */
    reset() {
        this.pauseAmount = 0;
        this.paused = true;
        this.beginTime = null;
        this.#registerAllEvents();
        this.dispatchSpecialEvent("reset");
    }
    // Special Events functions
    /**
     * Add a callback to the onStart event, you may add multiple ones
     */
    set onStart(callback) {
        this.#specialEvents.start.push(callback);
    }
    /**
     * Add a callback to the onStop event, you may add multiple ones
     */
    set onStop(callback) {
        this.#specialEvents.stop.push(callback);
    }
    /**
     * Add a callback to the onReset event, you may add multiple ones
     */
    set onEnd(callback) {
        this.#specialEvents.end.push(callback);
    }
    /**
     * Add a callback to the onReset event, you may add multiple ones
     */
    set onReset(callback) {
        this.#specialEvents.reset.push(callback);
    }
    /**
     * Dispatches one of the special events
     * @param event - The event to dispatch
     */
    dispatchSpecialEvent(event) {
        this.#specialEvents[event].forEach((el) => el());
    }
    /**
     * Destroys all the callbacks of a special event
     * @param event - The event type to destroy
     */
    destroySpecialEvent(event) {
        this.#specialEvents[event] = [];
    }
    /**
     * Destroys all the callbacks of all the special events
     */
    destroyAllSpecialEvents() {
        this.#specialEvents = {
            start: [],
            stop: [],
            reset: [],
            end: []
        };
    }
    // Callbacks functions
    /**
     * Add an event listener, to trigger at a specific interval of time
     * @param event - The interval of time the event should be triggered at
     * @param callback - The callback to trigger
     */
    addEventListener(event, callback) {
        this.#registerEvent(event);
        this.callbacks.push([event, callback]);
        this.checkEvents();
    }
    /**
     * Removes all the callbacks of a specific time interval
     * @param event - The event to remove
     */
    removeEventListener(event) {
        this.callbacks = this.callbacks.filter((el) => el[0] != event);
        this.#unregisterEvent(event);
    }
    /**
     * Triggers all the callbacks of a specific time interval
     * @param event - The interval of the callbacks to trigger
     * @returns The amount of callbacks triggered
     */
    dispatchEvent(event) {
        let tmp = 0;
        this.callbacks.forEach((el) => {
            if (el[0] == event) {
                el[1]();
                tmp++;
            }
        });
        return tmp;
    }
    // Events registering functions
    // That looks fine
    #timelineInsert(date, name) {
        let i = 0;
        try {
            while (date >= this._timeline[i][0]) {
                if (name === this._timeline[i][1])
                    break;
                i++;
            }
        }
        catch (e) {
            i = this._timeline.length;
        }
        this._timeline.splice(i, 0, [date, name]);
    }
    #registerEvent(event) {
        if (Array.isArray(event))
            event = event[0];
        if (event > 0) {
            let tmp = Date.now();
            let nextTime = (this.timeLeft % event) + tmp;
            if (nextTime == tmp)
                nextTime = event + tmp;
            this.#timelineInsert(nextTime, event);
            return true;
        }
        return false;
    }
    #unregisterEvent(event) {
        if (Array.isArray(event))
            event = event[0];
        if (event > 0) {
            this._timeline = this._timeline.filter(tmp => tmp[1] !== event);
            return true;
        }
        return false;
    }
    #registerAllEvents() {
        this._timeline = [];
        this.callbacks.forEach((tmp) => {
            this.#registerEvent(tmp[0]);
        });
    }
    // Events
    checkEvents() {
        if (this.paused != true) {
            while (this._timeline.length && this._timeline[0][0] <= Date.now()) {
                this.dispatchEvent(this._timeline[0][1]);
                let tmp = this._timeline.shift();
                this.#registerEvent(tmp[1]);
            }
            if (this.timeLeft <= 0) {
                this.stop();
                return;
            }
            clearTimeout(this.#currentTimeout);
            if (this._timeline.length)
                this.#currentTimeout = setTimeout(this.checkEvents.bind(this), this._timeline[0][0] - Date.now());
        }
    }
}
exports.Timer = Timer;
