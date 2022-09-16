var http = require('http');
var handleRequest = function(request, response) {
 response.writeHead(200);
 response.end("Hey How are you Today NIT####..!15");

}
var www = http.createServer(handleRequest);
www.listen(8080);
