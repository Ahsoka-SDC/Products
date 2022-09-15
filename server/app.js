var express = require('express');



// Router
var router = require('./routes.js');

var app = express();

app.use(express.json());

app.use('/products', router);


var PORT = 3000;
app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);