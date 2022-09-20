var express = require('express');



// Router
var router = require('./routes.js');

var app = express();

app.use(express.json());

app.use('/products', router);

app.get('/loaderio-444a9ad8fcb80e74a8df34887be14331', (req, res) => {
  res.status(200).send('loaderio-444a9ad8fcb80e74a8df34887be14331');
})


var PORT = 3000;
var server = app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);

server.keepAliveTimeout = 10;
server.headersTimeout = 11;