// var PORT = process.env.PORT || 5000
// var express = require('express')
// var path = require('path')
// var serveStatic = require('serve-static')

// var app = express()
// app.use(serveStatic(path.join(__dirname, 'dist')))

var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));


app.listen(PORT)
console.log('server started ' + PORT)