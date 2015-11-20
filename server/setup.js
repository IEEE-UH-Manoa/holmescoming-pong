var b = require('bonescript');
var game = require('./game');
var server = require('./server');

var input_pins = [
    "P8_8",
    "P8_9",
    "P8_10",
    "P8_11",
    "P8_11"
];

var ss;
var connections = [];

function emit(message){
    connections.forEach(function(connection){
        connection.send(message);
    });
}

function interruptCallback(x) {
    console.log(JSON.stringify(x.pin["universalName"]));
    emit("Interrupt has been called." );
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
        ss = new server.SocketServer();

        ss.wsServer.on('request', function(request) {
            var connection = request.accept('echo-protocol', request.origin);
            connection.on('message', function(message) {
                var msg = message.utf8Data
                if(msg === "end_game"){
                    // End Game Behavior here.
                }
                else if( msg === "start_game" ){
                    // Start Game Behavior here.
                }
            });

            connection.on('close', function(reasonCode, description) {
                console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
            });
            connections.push(connection);
            console.log((new Date()) + ' Connection accepted.');
            console.log("Current number of connections: " + connections.length);
        });

        attachInterrupts(input_pins);
        console.log("Attached Interrupts");
    }
}
