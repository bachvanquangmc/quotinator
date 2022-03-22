const User = require('../Models/users');
var jwt = require('jsonwebtoken');



const signup = (req,res) => {
// can also write as  const signup = ({ Body },res) => {}
    const user = new User()
    user.email = req.body.email
    user.password = req.body.password
    user.save((err,done)=>{
        if(err) return res.status(500).send("Signup failed")
        res.status(201).send('signed up successfully')
    })
}

const login = (req,res) => {
    User.findOne({email:req.body.email}, (err, user)=>{
        if(err) return res.status(404).send("User not found")

        res.send(user.comparePassword(req.body.password))
    })
}


module.exports = {
    signup,
    login
}