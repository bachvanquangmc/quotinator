
const Setting = require("../Models/settings");

const saveSetting = async (req, res) => {
  const body = req.body;

  const setting = await Setting({
    owner: body.owner,
    darkmode: body.darkmode,
    displayByPopularity: body.displayByPopularity,
    displayByAuthor: body.displayByAuthor,
    numberOfQuotes: body.numberOfQuotes,
  }).populate('owner', 'email -_id');

  setting.save((err, data) => {
    if (err) return res.status(400).send("setting not created");
    res.status(201).send(data);
  });
};


const updateSetting = async (req, res) => {
  const {owner} = req.body
   const setting = await Setting.findOneAndUpdate({owner:owner},{
        $set:{
            darkmode: req.body.darkmode,
            displayByAuthor: req.body.displayByAuthor,
            displayByPopularity: req.body.displayByPopularity,
            numberOfQuotes: req.body.numberOfQuotes
            
        }
    }, {new:true}).populate('owner', 'email -_id')

    res.json(setting);
  
};


const getSettingByUser = (req, res) => {
  Setting.findOne(req.params.owner, (err, setting) => {
    if (err) return res.status(404).send("Can't find the user");

    res.status(200).send(setting);
  });
};

module.exports = {
  saveSetting,
  getSettingByUser,
  updateSetting,
};

