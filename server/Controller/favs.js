const Fav = require('../Models/favs')

const createFavs = async (req, res) => {
  const body = req.body
  const fav = new Fav()

  fav.quote = body.quote
  fav.author = body.author
  fav.save((err, data) => {
    if (err) return res.status(400).send("not created")
    res.status(201).send(data)
  })
}

const getFavs = async (req, res) => {
  Fav.findById(req.params.id, (err, favs) => {
    if (err) return res.status(404).send("not found")

    res.json(favs)
  })
}

const getQuotes = async (req, res) => {
  Fav.find(req.body.author,(err,favs)=>{
    if(err) return res.status(500).send("no quotes found") 
  })
}

module.exports = { createFavs, getFavs, getQuotes }