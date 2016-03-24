

import {BurstTimer} from '../lib/burst-timer';


describe('BurstTimer', function(){

    it('should start properly', function(done){

        var burstTimer = new BurstTimer();
        burstTimer.onBurst(()=>{
            
        });
        burstTimer.start();
        done();
    });
});
