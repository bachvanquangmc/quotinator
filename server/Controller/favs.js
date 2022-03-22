const Fav = require('../Models/favs')

const createFavs = async (req, res) => {
  const body = req.body
  const fav = new Fav()

 fav.quote = body.quote
 fav.author = body.author
 fav.owner = body.owner
 fav.save((err,data)=>{
  if(err) return res.status(400).send("not created") 
  res.status(201).send(data)
})
 

}

const getFavs = async (req, res)=> {
  Fav.findById(req.params.id,(err,favs)=>{
    if(err) return res.status(404).send("not found")
    res.json(favs)
}).populate('owner', 'email -_id')
}

const getQuotes = async (req, res) => {
  const result = await Fav.find({author:req.params.author})
  res.status(200).send(result) 
   
 }

const deleteFavs = async (req, res) => {
  const { id } = req.body
  await Fav.findByIdAndRemove(id)

  // res.send("deleted")

  res.end()
}
module.exports = { createFavs, getFavs, getQuotes, deleteFavs }

