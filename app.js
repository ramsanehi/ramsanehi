
var express  = require('express'),
   mongoose = require('mongoose'),
   bodyParser = require('body-parser'),
    ejs      = require('ejs')

    // Mongoose Schema definition
//Update user model (todo)
    Schema = new mongoose.Schema({
      userName       : String, 
      Password    : String,
      mobileNo: Number,
      emailAddress   : String ,   
      Address   : String,    
    }),

    User = mongoose.model('User', Schema);

    mongoose.connect('mongodb://rama:123456@ds013564.mlab.com:13564/ram-database')
    var app = express()

    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({extended: true}));
 

  app.get('/api', function (req, res) {
    res.json(200, {msg: 'OK' });
  })

app.get('/', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    User.find({}, function ( err, users ){
        if(!err && users){
            res.render('users.ejs',{
                data :  users
            })
        } else {
            console.log(err)
        }
    });

});
app.get('/adduser',function(req,res){
  res.render('addUser.ejs')
});
  app.post('/api/adduser', function (req, res) {

      //update post function as per new model (todo)
        var user = new User(
        {
        userName : req.body.userName,
        Password : req.body.Password,
        mobileNo : req.body.mobileNo,
        emailAddress : req.body.emailAddress,
        Address : req.body.Address,
        
   } );
       

   
    // http://mongoosejs.com/docs/api.html#model_Model-save
    user.save(function (err, data) {
        if(!err && data){
          console.log('Data added successfully');
          res.redirect('/')
          
        } else {
            res.json(500, {msg: 'Something went wrong' });
            console.log(err)
        }
      
    });
  })

  app.delete('/api/users', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-remove
    User.remove({ isPassedOut: true }, function ( err ) {
        if(!err){
            console.log("User deleted successfully")
        } else{
            console.log(err)
        }
    });
  })

  app.post('/api/edituser/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-remove
   User.findById( req.params.id, function ( err, user ) {
    //console.log(user)
    user.userName = req.body.userName
    user.Password = req.body.Password
    user.mobileNo = req.body.mobileNo
    user.emailAddress = req.body.emailAddress
    user.Address = req.body.Address

    user.save(function(err,data){
      if(!err && data){
        res.redirect('/')
      }
      else
      {
        console.log(err)
      }
    });
  });
 });


app.get('/api/users/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
        if(!err && user){
          res.status(200).json(user)
            
          }
           // res.status(200).json(user)
         else {
            console.log(err)
        }
    });
  })
     app.get('/edituser/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      //user.remove({isPassedOut:true},function(err){
          if(!err && user){
            res.render('edituser.ejs',{
             data:user 
            })

           //console.log("user delete successfully")
          } 
          else {
              console.log(err)
          }
       
    
    });
  })

  app.get('/userdetails/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
        if(!err && user){
          res.render('userDetail.ejs',{
            data:user
          })
           // res.status(200).json(user)
        } else {
            console.log(err)
        }
    });
  })

  

    app.put('/api/user/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      user.isPassedOut = req.body.completed;
      // http://mongoosejs.com/docs/api.html#model_Model-save
      user.save( function ( err, data ){
          if(!err && data){
           res.status(200).json(data)
          } else {
              console.log(err)
          }
       });
      });
  });
    

  app.delete('/api/users/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      // http://mongoosejs.com/docs/api.html#model_Model.remove
      user.remove( function ( err ){
           res.status(200, {msg: 'User deleted successfully'})
      });
    });
  
})

app.listen(1338);
console.log('Magic happens on port 1338');


