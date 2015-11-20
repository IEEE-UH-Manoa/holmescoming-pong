$(document).ready(function(){
    if ("WebSocket" in window) {
        var ws = new WebSocket("ws://localhost:8081", 'echo-protocol');
        ws.onopen = function() {
            ws.send("Message to send");
            console.log("Message is sent...");
        };
        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            console.log("message: " + received_msg);
            if(received_msg === "hello\n"){
                $('#cool').html("hello");
            }

        };
        ws.onclose = function() {
            console.log("Connection is closed...");
        };
    }
    else
        {
            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }
});
