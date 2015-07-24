
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// routes/endpoints
app.get('/', function(request, response) {
	response.send("All your bots are belong to us!");
});

app.get('/gety', function(request, response){
	// you will do some logic here
    // ....
    // and return your response
    response.send("OK");
});

app.post('/posty', function(request, response) {
	// you will receive some params here
    // you can read them like this:
    var val = request.body.paramName;
    console.log(val);

    // you don't need to return anything special so OK is fine.
    response.send("OK");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
