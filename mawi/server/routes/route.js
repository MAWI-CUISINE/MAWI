
const Mawirouter = require('express').Router();
const {post,get,Precipe}=require('../controller/controller')

const { post,SignUp,Login } = require("../controller/controller");






Mawirouter.route('/post').post(post)
Mawirouter.route('/getAllPost').get(get)
Mawirouter.route('/postRecipies').post(Precipe)
// Mawirouter.route('/getRecipies').get(get)











Mawirouter.route("/post").post(post);
Mawirouter.route("/signup").post(SignUp);
Mawirouter.route("/login").post(Login);


module.exports = Mawirouter;

