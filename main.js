var util = require('util');
var setup = require('./setup');
var game = require('./game');

console.log("=== Program Start ===");

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text));
    if (text === '\n') {
        setup.start();
        process.stdin.pause();
    }
});

