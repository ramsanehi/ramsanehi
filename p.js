var express =require('express')
var app=express()

app.get('/course/:courseName',function(req,res){
res.render('loginup.ejs',{


data:req.params.courseName
}
)

res.end()
})
app.listen(8081)
console.log("hello ram");
