var http = require('http');
var handleRequest = function(request, response) {
 response.writeHead(200);
 response.end("Hello Hello World, How are you Today..!");

}
var www = http.createServer(handleRequest);
www.listen(8080);
