var util = require('util');
var setup = require('./setup');

var getInput = function(callback){
    console.log("=== Program Start ===");

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (text) {
        process.stdin.pause();
        callback(text);
    });
}

getInput(function(text){
    console.log('received data:', util.inspect(text));
    if (text === '\n') {
        setup.watch();
    }
});
