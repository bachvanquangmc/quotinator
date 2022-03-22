const jwt = require('jsonwebtoken');
const config = require('config')

const authoriseUser = (req,res,next)=>{

    // jwt.verify(req.query.token,"thisismysecret",(err,data)=>{
    //     if(err) return res.send("not authorized")

    //     req.user = data
    //     next()
    // })
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send('Access denied. No token provided.')
    try{
        const decoded = jwt.verify(token, config.get('userPrivateKey'))
        req.user = decoded
        next()
    } catch(ex){
        res.status(400).send('Invalid token')
    }

}

module.exports = authoriseUser