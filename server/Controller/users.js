const User = require('../Models/users');
const bcrypt = require('bcrypt')



const signup = async (req,res) => {
let user = await User.findOne({email: req.body.email})
if(user) return res.status(400).send('User already registered')

    user = new User({
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()

    const token = user.generateAuthToken()

    res.header('x-auth-token', token).send({
        email: user.email
    })
}

const login = async (req,res) => {
    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('invalid user or password')
    
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      if(!validPassword) return res.status(400).send('invalid user or password')

      const token = user.generateAuthToken()
      res.send(token)
    }

const getCurrentUser = async (req,res)=>{
        const user = await User.findById(req.user._id).select('-password')
        res.send(user)
}


module.exports = {
    signup,
    login,
    getCurrentUser
}