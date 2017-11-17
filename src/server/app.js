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

app.listen(3000, function () {
  console.log('To Do Web app service listening on port 3000!')
})