const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PuppySchema = new Schema({
  name: String,
  size: String,
  location: String,
  breed: String,
  image: String
})

module.exports = mongoose.model('Profile', PuppySchema)
