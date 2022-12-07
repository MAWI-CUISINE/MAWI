

const Mawirouter = require('express').Router();
const {
  addPost,
  GetAllRecipes,
  getAllPosts,
  PostRecipe,
  SignUp,
  Login,
} = require("../controller/controller");
Mawirouter.route('/post').post(addPost)//mtea mariem
Mawirouter.route("/getallrecipes").get(GetAllRecipes); //mtea wiwi

Mawirouter.route('/getAllPost').get(getAllPosts)//mtea maryem
Mawirouter.route('/postRecipies').post(PostRecipe)//mtea wiwi
Mawirouter.route("/signup").post(SignUp);
Mawirouter.route("/login").post(Login);



module.exports = Mawirouter;

