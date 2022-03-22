const mongoose= require('mongoose')
const { Schema } = mongoose;

const QuoteSchema = new Schema({
  Quote: {type: String, required:true},
  Author: {type: String, reuired:true},
  Tags: [{type: String}],
  Popularity: Number,
  Category: {type: String, required:true},
})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote
