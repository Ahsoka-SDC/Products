var express = require('express');



// Router
var router = require('./routes.js');

var app = express();

app.use(express.json());

app.use('/products', router);


app.get('/loaderio-62ce08f7d1438d86cb02daa392076d21', (req, res) => {
  res.status(200).send('loaderio-62ce08f7d1438d86cb02daa392076d21');
})


var PORT = 3000;
var server = app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);

server.keepAliveTimeout = 10;
server.headersTimeout = 11;