
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SettingsSchema = new Schema({
    task: { type: String, default: "None" },
    date: Date,
});

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo

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
