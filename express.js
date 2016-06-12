var express =require('express')
var app=express()

app.get('/',function(req,res){
res.writeHead(200,{"contentType":"text/html"})
res.write("hello how R U")
res.end("")
})
console.log("hello ram");
app.listen(8080)