var express =require('express')
var app=express()

app.get('/loginup',function(req,res){
res.render('loginup.ejs')


res.end()
})
app.listen(8081)
console.log("hello ram");
