

import {BurstTimer} from '../lib/burst-timer';


describe('BurstTimer', function(){

    var burstTimer;

    beforeEach(function(){
        burstTimer = new BurstTimer();
    });

    it('should start properly', function(done) {

        this.timeout(20000);

        var counter = 0;

        burstTimer.onBurst(()=>{
            counter = counter + 1;

            console.log(burstTimer);

            if(counter === 10) {
                done();
            }
        });

        burstTimer.start();
    });
});
