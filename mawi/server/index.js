var express = require("express");
//var morgan = require("morgan");

var cors = require("cors");

var app = express();
app.use(cors());
//app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(__dirname + "/../client/dist"));

var PORT = 5000;

app.listen(PORT, function () {
  console.log("server yejri fi  http://localhost:" + PORT);
});
