

import {EventEmitter} from "events";


export const BurstTimerState = {
    RUNNING: 'RUNNING',
    STOPPED: 'STOPPED'
};

export class BurstTimer {

    constructor(options) {

        options = options || {};
        this.eventName = 'burst';
        this.state = BurstTimerState.STOPPED;
        this.timer = null;
        this.rate = options.rate || 2;
        this.initialTimeout = options.initialTimeout || 1;
        this.threshold = options.threshold || 10;
        this.currentTimeout = this.initialTimeout;
        this.emitter = new EventEmitter();
    }

    onBurst(callback) {
        this.emitter.on(this.eventName, callback);
    }

    removeBurstListener(callback) {
        this.emitter.removeListener(this.eventName, callback);
    }

    removeAllBurstListeners() {
        this.emitter.removeAllListeners(this.eventName);
    }

    start() {
        if(this.state === BurstTimerState.STOPPED) {
            this.state = BurstTimerState.RUNNING;
            this.timer = setTimeout(()=>{
                this.emitter.emit(this.eventName);
                this.currentTimeout = Math.round(this.currentTimeout * this.rate);
                this.stop();
                this.start();
            }, this.currentTimeout);
        }
    }

    stop() {
        this.state = BurstTimerState.STOPPED;
        if(this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
