var express = require('express');
var bodyParser = require('body-parser');
var toDoService  = require('./services/toDoService');
var app = express();

app.engine('.html', require('ejs').__express)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

var port = 3000;
var server = app.listen(port);
var io = require('socket.io').listen(server);
console.log('Express started on port ' + port);

app.post('/api/getToDo', function (req, res) {
  let toDoServiceObj = new ToDoService(req, res)
  toDoServiceObj.getToDo()
    console.log(toDoServiceObj.getToDo());
    io.on('connection', function (socket){
        socket.emit('questionss', getToDo()) ;
});
})
