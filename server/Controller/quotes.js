const Quote = require("../Models/quotes");


const getQuotes = async (req, res) => {
    Quote.find(),(err,data) => {
        if(err) return err
        res.json(data)
    }
 }

const getQuoteByAuthor = async(req,res) => {
    const result = await Quote.find({author:req.params.author})
    res.status(200).send(result) 
}

module.exports = {
  getQuotes,
    getQuoteByAuthor
}
