var game = require('./game');
var server = require('./server');
var util = require('util');

var ss;
var connections = [];

function emit(message){
    connections.forEach(function(connection){
        connection.send(message);
    });
}

ss = new server.SocketServer();

ss.wsServer.on('request', function(request) {
    var connection = request.accept('echo-protocol', request.origin);
    connection.on('message', function(message) {
        msg = message.utf8Data
        console.log("Message: " + msg);
        if(msg === "end_game"){
            console.log("we should be ending our game here");
            emit("end_game");
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
    connections.push(connection);
    console.log(connections.length);
    console.log((new Date()) + ' Connection accepted.');
});


var getInput = function(callback){
    console.log("=== Program Start ===");

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (text) {
        callback(text);
    });
}

getInput(function(text){
    console.log('received data:', util.inspect(text));
    emit(text);
});



