var http = require('http');

var server = http.cretaeServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("I am me\n");
});

server.listen(8000);

console.log("Server running at http://localhost:8000/");
