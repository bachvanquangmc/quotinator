const Fav = require("../Models/favs");

const createFav = (req, res) => {
  const body = req.body;
  const fav = new Fav();

  fav.quote = body.quote;
  fav.author = body.author;

  fav.save((err, data) => {
    if (err) return res.status(400).send("not created");
    res.status(201).send(data);
  });
};

const getFav = (req, res) => {};




module.exports = {
    createFav
}