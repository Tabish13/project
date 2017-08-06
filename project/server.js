var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var winston = require('winston');

var app = express();

//set the view engine to ejs
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

var utilities = require('./utils/util');
utilities.init();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//https://www.npmjs.com/package/body-parser-json



//Creating hooks for every req and res.
var hooks = require('./hooks');
hooks.init(app); //applying hooks for every req res.


//Established db connection
var connection = require('./dbhandler/dbconnection');
connection.init();



//Route the incoming request
require('./routes/routes')(app);


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
});