var express = require('express');
var bodyparser = require('body-parser');

var app = express();

// app use statements.s
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// get values 
app.get('/api/Values', function (req, res) {
  res.send([{ username: "balaji", password: "test" }]);
});

//post username and password for authentication.
app.post('/api/authenticate', function(req, res) {
  debugger;
  
  var username = req.body.Username;
  var password = req.body.Password;

  if(username == "balaji" && password == "balaji"){
    res.send({ message: "Login Sucessfull", status: true });
  }
  else{
    res.send({ message: "Incorrect username/password", status: false });
  }
});

var server = app.listen(5000, function () {
  console.log("server is running");
});