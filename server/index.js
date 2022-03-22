const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./Routes/favs");
const userRouter = require("./Routes/users")
const settingRouter = require("./Routes/settings")


// const config = require("./config");
const config = require('config')

if(!config.get('userPrivateKey')){
  console.error('FATAL ERROR: userPrivateKey is not defined')
  process.exit(1)
}

app.use(express.json());
app.use(cors())
app.use(router);
app.use(userRouter);
app.use(settingRouter)


mongoose.connect(config.get("Mongo_url"), (err) => {
  if (err) return console.log(err);
  console.log("Connect to db successfully.");
});

app.listen(3000, () => {
  
  console.log("The server is running on port 3000.");

});
