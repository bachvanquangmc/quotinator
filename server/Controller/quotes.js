const Quote = require("../Models/quotes");


const getQuotes = async (req, res) => {

    try {
        const quotes = await Quote.find({}, null, { limit: 30});
        res.send(quotes)
    } catch(e) {
        console.log(e);
        res.send(e);
    }
 }

const getQuoteByAuthor = async(req,res) => {
  try {
    const result = await Quote.find({Author:req.params.author})
    res.status(200).send(result) 
  
} catch(e) {
    console.log(e);
    res.send(e);
}
}

module.exports = {
  getQuotes,
    getQuoteByAuthor
}
