function sleep(SubMilliseconds) {
    if (! SubMilliseconds) return;
    var start = performance.now();
    for (var i = 0; i < 1e7; i++) {
        if ((performance.now() - start) > SubMilliseconds) break;
    }
}

function hibernate(milliseconds) {
    if (! milliseconds) return;
    var start = Date.now();
    for (var i = 0; i < 1e7; i++) {
        if ((Date.now() - start) > milliseconds) break;
    }
}

function uuid(){
    try{
        var timeNow = performance.now().toString();
        // sleep for 1 submillisecond to generate a completely unique id
        sleep(0.0000001);
        return timeNow;
    } catch(e){
        try{
            var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
            do {
                var ascicode=Math.floor((Math.random()*42)+48);
                if (ascicode<58 || ascicode>64){
                    idstr+=String.fromCharCode(ascicode);    
                }
            } while (idstr.length<32);

            try{
                var Now = Date.now().toString();
                var randomID = Now.substr(-8);
                hibernate(1);
            }catch(e){
                null;
            }
            
            var timeNow = randomID? (idstr + randomID) : idstr;
            return timeNow;
        }catch(e){
            console.error(e);
        }
    }
}


export default uuid;