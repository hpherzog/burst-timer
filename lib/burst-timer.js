

import {EventEmitter} from "events";


export class BurstTimer {

    constructor() {
        this.emitter = new EventEmitter();
    }

    onBurst(callback) {
        this.emitter.on('burst', callback);
    }

    start() {

    }

    pause() {

    }

    stop() {

    }
}
