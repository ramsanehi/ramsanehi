var http = require('http')
var url = require('url');
var server = http.createServer(function(req,res){
	var page=url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200,{"contentType":"text/html"})
	 res.write('well hello'+page);	 	
	 res.end();
	 });

	 server.listen(8082);