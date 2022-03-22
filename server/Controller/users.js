const User = require('../Models/users');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')



const signup = async (req,res) => {
// can also write as  const signup = ({ Body },res) => {}
let user = await User.findOne({email: req.body.email})
if(user) return res.status(400).send('User already registered')

    user = new User({
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()
    res.send({
        email: user.email
    })
}

const login = (req,res) => {
    User.findOne({email:req.body.email}, (err, user)=>{
        if(err) return res.status(404).send("User not found")
        console.log(req.body.email);

        res.send(user.comparePassword(req.body.password))

    })
}


module.exports = {
    signup,
    login
}