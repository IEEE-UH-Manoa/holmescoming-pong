var b = require('bonescript');
var inputPin = 'P8_8';

function interruptCallback(x) {
    console.log(Date.now());
    console.log(JSON.stringify(x));
    console.log("Got something");
}

function detach() {
    b.detachInterrupt(inputPin);
    console.log('Interrupt detached');
}


module.exports = {
    start: function(){
        b.pinMode(inputPin, b.INPUT);
        b.attachInterrupt(inputPin, true, b.RISING, interruptCallback);
        console.log("Attached Interrupts");
    }
}
