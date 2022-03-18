const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const router = require("./Routes/todo");
// const userRouter = require('./Routes/user');

const config = require("./config");


app.use(express.json());

// app.use(router);
// app.use(userRouter);

app.use('/', (req,res)=>{
    res.send('Bla')
})

mongoose.connect(config.Mongo_url, (err) => {
  if (err) return console.log(err);
  console.log("connect to db scuessfully");
});
app.listen(3000, () => {
  console.log("The server is runing on port 3000.");
});
