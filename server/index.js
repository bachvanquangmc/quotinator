const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./Routes/favs");
const userRouter = require("./Routes/users")
const settingRouter = require('./Routes/settings')

const config = require("./config");

app.use(express.json());
app.use(cors())
app.use(router);
app.use(userRouter);
app.use(settingRouter);



mongoose.connect(config.Mongo_url, (err) => {
  if (err) return console.log(err);
  console.log("connect to db scuessfully");
});
app.listen(3000, () => {
  console.log("The server is runing on port");
});
