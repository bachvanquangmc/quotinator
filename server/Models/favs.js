const mongoose= require('mongoose')
const { Schema } = mongoose;

const FavSchema = new Schema({
  owner: {type: mongoose.Schema.ObjectId, ref: 'User'},
  quote: {type: String ,required:true, unique:true},
  author: String,
})

const Fav = mongoose.model('Fav', FavSchema)

module.exports = Fav