var http = require('http')


var server = http.createServer(function(req,res){
	res.writeHead(200,{"contentType":"text/html"})
	res.end("<h1 style='font-size:large;color:red'>simple code for HTML rendering</h1><br><ul><li>rahul</li><li>Gautam</li></ul><br><h2 style='font-size:large;color:green'>hello how r u</h2><br><ol><li>ram</li><li>akash</li></ol>") 

})

server.listen(8080)