var express = require('express')
var bodyParser = require('body-parser')
var toDoService  = require('./services/toDoService')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/getToDo', function (req, res) {
  let toDoServiceObj = new toDoService(req, res)
  toDoServiceObj.getToDo()
})

var port = 3000;
var server = app.listen(port);
var io = require('socket.io')(server);
console.log('Express started on port ' + port);

app.get("/", function(req, res){
    res.render('index');
});

io.on('connection', function (socket){
    socket.on('drawing', function(data){
        socket.broadcast.emit('news', data);
    });
});