const mongoose= require('mongoose')
const Schema  = mongoose.Schema;
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const config = require('config')

const UserSchema = new Schema({
  email: {
      type: String,
      required: true,
      unique: true
},
  password: { 
      type: String,
      required: true,
}
});


UserSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id}, config.get('userPrivateKey'))
  return token
}
const User = mongoose.model("User",UserSchema)


module.exports = User