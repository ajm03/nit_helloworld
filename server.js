var http = require('http');
var handleRequest = function(request, response) {
 response.writeHead(200);
 response.end("Hey How are you Today..!14");

}
var www = http.createServer(handleRequest);
www.listen(8080);
