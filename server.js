var http = require('http');
var handleRequest = function(request, response) {
 response.writeHead(200);
 response.end("Hey How are you Today..!13");

}
var www = http.createServer(handleRequest);
www.listen(8080);
