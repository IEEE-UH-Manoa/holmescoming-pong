var b = require('bonescript');
var game = require('./game');

function interruptCallback(x) {
    console.log(Date.now());
    // console.log("Got something on " + x.pin.universalName);
    console.log(JSON.stringify(x.pin["universalName"]));
}

function detach() {
    b.detachInterrupt(inputPin);
    console.log('Interrupt detached');
}

function attachInterrupts(input_pins){
    console.log("Attempting to attach all interrupts");

    input_pins.forEach(function(input_pin){
        b.pinMode(input_pin, b.INPUT);
        b.attachInterrupt(input_pin, true, b.RISING, interruptCallback);
        console.log("Finished attaching inputPin + " + input_pin);
    });
}

module.exports = {
    start: function(){
        var input_pins = [
            "P8_8",
            "P8_9",
            "P8_10",
            "P8_11",
            "P8_11"
        ];
        attachInterrupts(input_pins);
        console.log("Attached Interrupts");
    }
}
