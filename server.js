const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Puppy = require('./models/puppies')
// const localUrl = require('./config')

let app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const port = 8080
const url = process.env.PROD_MONGODB
mongoose.Promise = global.Promise;
mongoose.connect(url)

app.post('/puppies', function(req, res) {
  if(!req.body) {
    res.status(400)
  }
  const puppy = new Puppy(req.body)
  puppy.save()
    .then(console.log, console.log)
})

app.get('/puppies', function(req, res) {
  Puppy.find({}, function(err, data) {
    if(err) {
      res.send(err);
    }
    res.json(data);
  })
})

app.delete('/puppies/:id', function(req, res) {
  Puppy.remove({"_id": req.params.id}, function(err, data) {
    if(err) {
      res.send(err);
    }
    res.json(data);
  })
})


app.listen(process.env.PORT || port, function() {
  console.log("app is listening")
})

exports.app = app;
