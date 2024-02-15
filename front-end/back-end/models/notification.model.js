const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificationSchema = new Schema({
  title: String,
  summary: String,
  text: String,
  notifEmail: Boolean,
  notifPage: Boolean,
  registration_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('notification', notificationSchema);