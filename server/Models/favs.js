const mongoose= require('mongoose')
const { Schema } = mongoose;

const FavSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
  quote: {type: String ,required:true},
  author: String,
})

const Fav = mongoose.model('Fav', FavSchema)

module.exports = Fav