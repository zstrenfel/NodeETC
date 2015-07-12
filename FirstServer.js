//http://blog.modulus.io/build-your-first-http-server-in-nodejs



var dispatcher = require('httpdispatcher');
var http = require('http');

const PORT = 8080;

function handleRequest(request, response) {
	try {
		console.log(request.url);
		dispatcher.dispatch(request, response);
	} catch(err) {
		console.log(err);
	}
}

//set the directory name for any static resources
dispatcher.setStatic('resources');

//sample get request
dispatcher.onGet("/page1", function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Page One');
});

//sample Post request
dispatcher.onPost("/post1", function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Got Post Data');
});



var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server lsitening on: http://localhost:%s", PORT);
});
