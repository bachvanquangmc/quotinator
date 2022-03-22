const Fav = require("../Models/favs");

const createFavs = async (req, res) => {
  const body = req.body
  const fav = await Fav({
    quote: body.quote,
    author: body.author,
    owner: body.owner
  }).populate('owner')

 fav.save((err,data)=>{
  if(err) return res.status(400).send("Not created") 
  res.status(201).send(data)
})
}

const deleteFavs = async (req, res) => {
  const { id } = req.body;
  await Fav.findByIdAndRemove(id);

  res.status(201).send(result)
}

const getFavs = async (req, res)=> {
  Fav.find({owner:req.params.id},(err,favs)=>{
    if(err) return res.status(404).send("Not found")
    res.json(favs)
}).populate('owner', 'email -_id')
}


module.exports = {
  createFavs,
  getFavs,
  deleteFavs
}
