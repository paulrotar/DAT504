var express = require('express')
var app = express()
var server = app.listen(4200);

app.use(express.static('./app'))