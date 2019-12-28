var multiply = require('./multiply-module');

var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if (error) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(3000);
console.log('The server is running...');

var fs = require('fs');