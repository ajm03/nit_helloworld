var http = require('http');
var handleRequest = function(request, response) {
 response.writeHead(200);
 response.end("Hello Hello World");

}
var www = http.createServer(handleRequest);
www.listen(8080);
