const express = require("express");
var morgan = require('morgan');
const {User}=require('./database')
const mawiRouter=require('../server/routes/route.js')
const app=express()
const cors = require("cors");
// const { Router } = require("express");

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
// app.use(Router())
app.use(cors());

app.use("/user",mawiRouter)
const PORT = 5000;

app.listen(PORT, function () {
  console.log("server yejri fi  http://localhost/:" + PORT);
});