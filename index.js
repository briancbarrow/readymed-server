const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const port = 8080
const url = process.env.PROD_MONGODB
mongoose.connect(url)



app.listen(process.env.PORT || port, function() {
  console.log("app is listening")
})
