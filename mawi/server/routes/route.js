

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
  Like,
  disLike,
  postShop,
  getAllShop,
  deleteRecipe,
  CheckUser,
  addCart,
  getAllCart,
  upTotal,
  upQ,
  downQ,
  getOneRecipe,
  delte1Cart,
  emptyCart,
  getAllUsers,
  deleteUser,
  UpdateItem,
  deleteElement,
  FilterRecipe,
  deletePost,
} = require("../controller/controller");
Mawirouter.route('/post').post(addPost)//mtea mariem
Mawirouter.route("/getallrecipes").get(GetAllRecipes); //mtea wiwi
Mawirouter.route("/getUser/:name").get(getUser); //mtea wiwi
Mawirouter.route("/getUser/:name").put(UpdateUser); //mtea wiwi
Mawirouter.route("/deleteRecipe/:id").delete(deleteRecipe); //mtea wiwi
Mawirouter.route("/recipelike/:name").put(Like); //mtea wiwi
Mawirouter.route("/recipedislike/:name").put(disLike); //mtea wiwi
Mawirouter.route("/onerecipe/:name").get(getOneRecipe); //mtea wiwi
Mawirouter.route("/emptyCart").delete(emptyCart); //mtea wiwi
Mawirouter.route('/getAllUsers').get(getAllUsers)//mtea maryem
Mawirouter.route('/deleteUser/:name').delete(deleteUser)//mtea maryem
Mawirouter.route("/UpdateItem/:name").put(UpdateItem);//mtea maryem
Mawirouter.route('/deleteElement/:name').delete(deleteElement)//mtea maryem
Mawirouter.route('/deletePost/:name').delete(deletePost)//mtea maryem

Mawirouter.route('/getAllPost').get(getAllPosts)//mtea maryem
Mawirouter.route('/postRecipes').post(PostRecipe)//mtea wiwi
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
Mawirouter.route("/deleteC/:name").delete(delte1Cart)
Mawirouter.route("/filter/:Rcategorie").get(FilterRecipe)
module.exports = Mawirouter;

