

const Mawirouter = require('express').Router();
const {
  addPost,
  GetAllRecipes,
  getAllPosts,
  PostRecipe,
  SignUp,
  Login,
  getUser,
  UpdateUser,

  postShop,
  getAllShop,

  CheckUser,
  addCart,
  getAllCart,
  upTotal,
  upQ,
  downQ

} = require("../controller/controller");
Mawirouter.route('/post').post(addPost)//mtea mariem
Mawirouter.route("/getallrecipes").get(GetAllRecipes); //mtea wiwi
Mawirouter.route("/getUser/:name").get(getUser); //mtea wiwi
Mawirouter.route("/getUser/:name").put(UpdateUser); //mtea wiwi

Mawirouter.route('/getAllPost').get(getAllPosts)//mtea maryem
Mawirouter.route('/postRecipies').post(PostRecipe)//mtea wiwi
Mawirouter.route("/signup").post(SignUp);
Mawirouter.route("/login").post(Login);

Mawirouter.route("/shop").post(postShop)//mta mimi
Mawirouter.route("/allShop").get(getAllShop); // mta mimi

Mawirouter.route("/check").post(CheckUser);



Mawirouter.route("/cart").get(getAllCart);
Mawirouter.route("/uptotal/:name").put(upTotal)
Mawirouter.route("/upQ/:name").put(upQ)
Mawirouter.route("/downQ/:name").put(downQ)
Mawirouter.route("/addCart").post(addCart)


module.exports = Mawirouter;

