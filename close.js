var http = require('http')
var url = require('url')
var server = http.createServer(function(req,res){
	var page=url.parse(req.url).pathname;
	res.writeHead(200,{"content-Type":"text/html"})
	res.end("hello How R U");
if(page=="/login"){
	res.write("request page is login")
   
}
else if(page=="/signup")
{
	res.write("request page is signup");

   }
else
{
	res.write("welcome molu")
}

//console.log(page);
	
	// res.write('well hello' + page);	 	
	 
	 });
	 server.on('close',function(req,res){
	 	console.log('good bye:server');
	 })				


	 server.listen(8082)
	 server.close();