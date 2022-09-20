var express = require('express');



// Router
var router = require('./routes.js');

var app = express();

app.use(express.json());

app.use('/products', router);

app.get('/loaderio-e80c300cd663b93b5534d6039e1c358e', (req, res) => {
  res.status(200).send('loaderio-e80c300cd663b93b5534d6039e1c358e');
})


var PORT = 3000;
var server = app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);

server.keepAliveTimeout = 10;
server.headersTimeout = 11;