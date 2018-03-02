var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
	// tutaj się coś dzieje
	// funkcja równoważna z poniższą:

	// var server = http.createServer();
	// server.on('request', function(request, response) {

	// })
})

var server = http.createServer();
server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.statusCode = 200;
			response.write(data);
			response.end();
		});
	} else {
		response.statusCode = 404;
		response.write('<img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_Fzq94YVbHHM%2FTKZG2Z4xT3I%2FAAAAAAAA50g%2FJjbBo_XlqyM%2Fs1600%2Fbest_404_error_pages_34.jpg&f=1">');
		response.end();
	};
});	

server.listen(8000);
