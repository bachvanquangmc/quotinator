const Setting = require('../Models/settings')

const saveSetting = async (req, res)=>{
  const body = req.body
  
    const setting = new Setting({        // Quang : Human
      owner: body.owner,
      darkmode: body.darkmode,
      displayByPopularity: body.displayByPopularity,
      displayByAuthor: body.displayByAuthor,
      numberOfQuotes: body.numberOfQuotes
    })
 
  setting.save((err,data)=>{
    if(err) return res.status(400).send("setting not created") 
    res.status(201).send(data)
  })
}

async function updateSetting(req, res){
  const setting = await Setting.findByIdAndUpdate(req.body.owner,{
    $set: {
      darkmode: req.body.darkmode
    }
  }, {new: true})
  res.send(setting)
}
module.exports = {saveSetting, updateSetting}