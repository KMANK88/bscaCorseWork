//first in terminal in derectory, we have to install express
//then, here we must require it

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
app = express();
var port = 3300;
var database = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
  res.render("main");
});

//this is a basic function that tests to see if our browser is in sync
/*
app.get('/', function(req,res) {
  res.send("Whoooo!!!! I work!");
});
*/


app.post('/', function(req, res) {

  database.push(req.body);

  res.json({message: "Success", data: database});
});

app.listen(port, function(req, res) {
  console.log("Listening on port", port);
});
