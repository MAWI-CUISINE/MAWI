

const Mawirouter = require('express').Router();
const {
  addPost,
  getAllPosts,
  Postrecipe,
  SignUp,
  Login
} = require("../controller/controller");
Mawirouter.route('/post').post(addPost)
Mawirouter.route('/getAllPost').get(getAllPosts)
Mawirouter.route('/postRecipies').post(Postrecipe)
Mawirouter.route("/signup").post(SignUp);
Mawirouter.route("/login").post(Login);



module.exports = Mawirouter;

