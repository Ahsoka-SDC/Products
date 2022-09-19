var express = require('express');



// Router
var router = require('./routes.js');

var app = express();

app.use(express.json());

app.use('/products', router);


var PORT = 3000;
var server = app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);

server.keepAliveTimeout = 10;
server.headersTimeout = 11;