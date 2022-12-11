

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

//Posts requests
Mawirouter.route('/post').post(addPost)//mtea mariem
Mawirouter.route('/deletePost/:name').delete(deletePost)
Mawirouter.route('/getAllPost').get(getAllPosts)


// Cart
Mawirouter.route("/emptyCart").delete(emptyCart); 
//  Shop
Mawirouter.route("/UpdateItem/:name").put(UpdateItem);
Mawirouter.route('/deleteElement/:name').delete(deleteElement)
Mawirouter.route("/shop").post(postShop)//mta mimi
Mawirouter.route("/allShop").get(getAllShop); // mta mimi

//user Requests
Mawirouter.route("/getUser/:name").get(getUser); 
Mawirouter.route("/getUser/:name").put(UpdateUser); 
Mawirouter.route('/getAllUsers').get(getAllUsers)
Mawirouter.route('/deleteUser/:name').delete(deleteUser)
Mawirouter.route("/signup").post(SignUp);
Mawirouter.route("/login").post(Login);
Mawirouter.route("/check").post(CheckUser);

//Recipe Requests
Mawirouter.route("/getallrecipes").get(GetAllRecipes); 
Mawirouter.route("/deleteRecipe/:id").delete(deleteRecipe); 
Mawirouter.route("/recipelike/:name").put(Like); 
Mawirouter.route("/recipedislike/:name").put(disLike); 
Mawirouter.route("/onerecipe/:name").get(getOneRecipe); 
Mawirouter.route('/postRecipes').post(PostRecipe)

//






Mawirouter.route("/cart").get(getAllCart);
Mawirouter.route("/uptotal/:name").put(upTotal)
Mawirouter.route("/upQ/:name").put(upQ)
Mawirouter.route("/downQ/:name").put(downQ)
Mawirouter.route("/addCart").post(addCart)
Mawirouter.route("/deleteC/:name").delete(delte1Cart)
Mawirouter.route("/filter/:Rcategorie").get(FilterRecipe)
module.exports = Mawirouter;

