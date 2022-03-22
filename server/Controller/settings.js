
const Setting = require("../Models/settings");

//get setting, update setting

const saveSetting = async (req, res) => {
  const body = req.body;

  const setting = new Setting({
    // Quang : Human
    owner: body.owner,
    darkmode: body.darkmode,
    displayByPopularity: body.displayByPopularity,
    displayByAuthor: body.displayByAuthor,
    numberOfQuotes: body.numberOfQuotes,
  });

  setting.save((err, data) => {
    if (err) return res.status(400).send("setting not created");
    res.status(201).send(data);
  });
};

const getSetting = (req, res) => {
  Setting.find(),
    (err, data) => {
      if (err) return err;
      res.json(data);
    };
};

const getSettingByUser = (req, res) => {
  Setting.findById(req.params.id, (err, setting) => {
    if (err) return res.status(404).send("Can't find a user");

    res.json(setting);
  });
};

const updateSetting = async (req, res) => {
//   Setting.findByIdAndUpdate(req.body.id, req.body, (err, setting) => {
  const {id} = req.body
   const setting = await Setting.findByIdAndUpdate(_id=id,{
        $set:{
            darkmode: req.body.darkmode,
            displayByAuthor: req.body.displayByAuthor,
            displayByPopularity: req.body.displayByPopularity,
            numberOfQuotes: req.body.numberOfQuotes
            
        }
    }, {new:true})

    // if (err) return res.status(404).send("not found");

    res.json(setting);
  
//   });
};

module.exports = {
  saveSetting,
  getSetting,
  getSettingByUser,
  updateSetting,
};

