const mongoose= require('mongoose')
const { Schema } = mongoose;

const favSchema = new Schema({
    quote: String,
    author: String,
    // owner:  {type: mongoose.Schema.ObjectId, ref: "User"}
});

const Fav = mongoose.model("Fav",favSchema)

module.exports = Fav