var WebSocketServer = require('websocket').server;
var http = require('http');

function SocketServer(){
    this.server = http.createServer(function(request, response) {
        console.log((new Date()) + ' Received request for ' + request.url);
        response.writeHead(404);
        response.end();
    });

    this.server.listen(8081, function() {
        console.log((new Date()) + ' Server is listening on port 8081');
    });

    this.wsServer = new WebSocketServer({
        httpServer: this.server,
        // You should not use autoAcceptConnections for production
        // applications, as it defeats all standard cross-origin protection
        // facilities built into the protocol and the browser.  You should
        // *always* verify the connection's origin and decide whether or not
        // to accept it.
        autoAcceptConnections: false
    });

    function originIsAllowed(origin) {
      // put logic here to detect whether the specified origin is allowed.
      return true;
    }
}

module.exports = {
    SocketServer: SocketServer
}
