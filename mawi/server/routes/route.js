const Mawirouter = require("express").Router();
const { post,SignUp,Login } = require("../controller/controller");




Mawirouter.route("/post").post(post);
Mawirouter.route("/signup").post(SignUp);
Mawirouter.route("/login").post(Login);


module.exports = Mawirouter;
