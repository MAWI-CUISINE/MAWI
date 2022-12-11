

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Recipe, Post, Shop, Cart } = require("../database");
const cloudinary = require("../cloudinary");



const emptyCart = async (req, res) => {
  
  try {
     Cart.deleteMany({ }, (err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  } catch (error) {
    res.json(error);
  }
};
const deleteRecipe=async(req,res)=>{
let id=req.params.id
try {
  await Recipe.deleteOne({Rname:id},(err,result)=>{
    if(err)console.log(err)
    res.json(result)
  })

} catch (error) {
  res.json(error)
}
}
const SignUp= async(req,res)=>{
    let body= req.body
    try{
const Password= await bcrypt.hash(body.password,10)

 await User.create({
    Uname:body.username,
    Uemail:body.email,
    Upassword:Password},(err,result)=>{
      if (err)console.log(err);

      else res.json(result);
    })
  } catch (err) {
    console.log(err,'err');
  }
}

const CheckUser = async (req, res) => {

  try {
    const oldPassword = await bcrypt.hash(req.body.oldPassword, 10);
    const NewPassword = req.body.newPassword

    console.log(oldPassword, '     ', NewPassword);

    let Check = await bcrypt.compare(NewPassword, oldPassword);
    console.log(Check);
    if (Check) {

      return res.json(true);
    } else {

      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    console.log(err);
  }
}
const UpdateUser = async (req, res) => {
  const username = req.params.name;
  let body = req.body;
  const { Uname, Uimage, Upassword } = body
  try {





    const Password = await bcrypt.hash(body.password, 10);

    const result = await cloudinary.uploader.upload(Uimage, {
      folder: 'MAWI'
    })


    console.log(result);
    await User.findOneAndUpdate(
      { Uname: username },
      { Uname, Uimage: result.url, Upassword: Password }
    ).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err, 'errorrororoeeeee');
  }
};
const Login = async (req, res) => {
  let body = req.body


  const user = await User.findOne({ Uname: body.username })

  if (!user) {
    return { status: 'error', error: 'username not found' }
  }
  let Check = await bcrypt.compare(
    body.password, user.Upassword
  )
  if (Check) {
    const token = jwt.sign({ name: user.Uname, email: user.Uemail }, 'topsecret')
    return res.json({ user: token, status: 'all good' })
  }
  else {
    return res.json({ status: 'error', user: false })
  }
}

const addPost = async (req, res) => {
  let body = req.body
  try {
    await Post.create(body,{unique:true}, (err, result) => {
      if (err) res.json(err)
      res.json(result)
    })
  }
  catch (err) {
    console.log(err);
  }
}


const PostRecipe = async (req, res) => {

  const body = req.body
  try {
    await Recipe.create(body, (err, result) => {
      if (err) res.json(err)
      res.json(result)
    })
  }
  catch (err) {
    console.log(err);
  }
}

const GetAllRecipes = async (req, res) => {
  try {
    await Recipe.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}
const getUser = async (req, res) => {
  const username = req.params.name
  try {
    await User.findOne({ Uname: username }).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}
const getAllPosts = async (req, res) => {

  try {
    await Post.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}
const getAllUsers = async (req, res) => {
  try {
    await User.find({admin:false}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const postShop = async (req, res) => {
  const body = req.body
  try {
    await Shop.create(body, (err, result) => {
      if (err) res.json(err)
      res.json(result)
    })
  }
  catch (err) {
    console.log(err);
  }
}
const getAllShop = async (req, res) => {
  try {
    await Shop.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}

const addCart = async (req, res) => {
  const body = req.body
  try {
    await Cart.create(body, (err, result) => {
      if (err) res.json(err)
      res.json(result)
    })
  }
  catch (err) {
    console.log(err);
  }
}
const getAllCart = async (req, res) => {
  try {
    await Cart.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}
const upTotal = async (req, res) => {
  try {
     Cart.findOneAndUpdate({ ArticleName: req.params.name }, {
      Total: req.body.total
    }, (err, result) => {
      if (err) console.log(err);
      res.json(result)
    })
  }
  catch (err) {
    res.json(err)
  }
}

const upQ = async (req, res) => {
  try {
    await Cart.findOneAndUpdate({ ArticleName: req.params.name }, {
      $inc: { Quantity: 1 }
    }, (err, result) => {
      if (err) console.log(err);
      res.json(result)
    })
  }
  catch (err) {
    res.json(err)
  }
}
const downQ = async (req, res) => {
  try {
    await Cart.findOneAndUpdate({ ArticleName: req.params.name }, {
      $inc: { Quantity: -1 }
    }, (err, result) => {
      if (err) console.log(err);
      res.json(result)
    })
  }
  catch (err) {
    res.json(err)
  }
}
const disLike = async (req, res) => {
  try {
     Recipe.findOneAndUpdate(
      { Rname: req.params.name },
      {
        $inc: { Rdislike: 1 },
      },
      (err, result) => {
        if (err) console.log(err);
         res.json(result);
      }
    );
  } catch (err) {
    res.json(err);
  }
};
const Like = async (req, res) => {
 
     Recipe.findOneAndUpdate(
      { Rname: req.params.name },
      {
        $inc: { Rlike: 1 },
      },
      (err, result) => {
        if (err) console.log(err);
        res.json(result);
      }
    );

};
const getOneRecipe = async (req, res) => {
  try {
    await Recipe.find({Rname:req.params.name}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const delte1Cart=async(req,res)=>{
  let name=req.params.name
  try {
    Cart.deleteOne({ArticleName:name},(err,result)=>{
      if(err)console.log(err)
      res.json(result)
    })
  
  } catch (error) {
    res.json(error)
  }
  }
const deleteUser = async (req, res) => {
  let name = req.params.name;
  try {
    User.deleteOne({ Uname: name }, (err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  deleteUser,
  getOneRecipe,
  Like,
  disLike,
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

emptyCart,
  deleteRecipe,

getAllUsers,
  CheckUser,
  addCart,
  getAllCart,
  upTotal,
  upQ,
  downQ,
  delte1Cart
};







