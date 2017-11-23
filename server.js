var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('mongodb://sohan:sohan@ds119565.mlab.com:19565/testssd',['tempdata'])
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://iot.eclipse.org')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })

app.get('/1/Temp/', function (req,res) {
    db.tempdata.find(function(err,docs){
    res.send(docs)})
  //  res.send('Here is the temp file')
})
app.post('/1/Temp', function(req,res){
    db.tempdata.save(req.body);
    console.log("We are Here to post");
    res.json(req.body);
})

app.get('/1/Light/', function (req,res) {
    res.send('Here is the Light file')
})
app.get('/1/Sound/', function (req,res) {
    res.send('Here is the Sound File')
})

client.on('connect', function () {
    client.subscribe('sohan')
    client.publish('sohan', 'Hello mqtt')
  })
   
client.on('message', function (topic, message) {
    console.log(message.toString())
    //client.end()
  //  var data = {"id" : message.toString()};
    // db.datacollection.save(data)
    //topic.json(message);
  })