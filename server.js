var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('mongodb://sohan:sohan@ds119565.mlab.com:19565/testssd',['tempdata'])

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })

app.get('/1/Temp/', function (req,res) {
    db.tempdata.find(function(err,docs){
    res.send(docs)})
  //  res.send('Here is the temp file')
})
app.get('/1/Light/', function (req,res) {
    res.send('Here is the Light file')
})
app.get('/1/Sound/', function (req,res) {
    res.send('Here is the Sound File')
})