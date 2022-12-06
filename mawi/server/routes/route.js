const Mawirouter = require("express").Router();
const {
  post,
//   SignUp,
//   Login,
  get
//   PostRecipe,
//   GetRecipe
} = require("../controller/controller");

Mawirouter.route("/post").post(post);
Mawirouter.route("/getAllPost").get(get);
// Mawirouter.route("/postRecipies").post(PostRecipe);
// Mawirouter.route("/getRecipies").get(GetRecipe);

// Mawirouter.route('/getRecipies').get(get)

// Mawirouter.route("/signup").post(SignUp);
// Mawirouter.route("/login").post(Login);

module.exports = Mawirouter;