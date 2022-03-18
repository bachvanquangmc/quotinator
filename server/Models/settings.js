const mongoose= require('mongoose')
const { Schema } = mongoose;

const SettingSchema = new Schema({
  darkmode: {type: Boolean, default: false},
  displayByPopularity: {type: Boolean, default: false},
  displayByAuthor: {type: Boolean, default: false},
  numberOfQuotes: {type: Number, default: 10},
})

const Setting = mongoose.model('Setting', SettingSchema)

module.exports = Setting