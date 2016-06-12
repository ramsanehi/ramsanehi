var express =require('express')
var app=express()

app.get('/loginup',function(req,res){
	var array1=["red","blue","green"]
res.render('loginup.ejs',{

data:array1
});
});
app.listen(8081)
console.log("hello ram");
