var http = require('http')
var name="ram sanehui"
var dept="mca"
var year="second"
var server = http.createServer(function(req,res){
	res.writeHead(200,{"contentType":"text/html"})
	res.write("<h1 >Introduction</h1>" +"<br>" + "<span>Name :</span>" +name +"<br>"+"<span>Dept:</span>" +dept +"<br>"+"<span>Year:</span>" +year)
     res.end()
})

server.listen(8080)