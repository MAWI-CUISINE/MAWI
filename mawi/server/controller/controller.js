const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Admin, Recipe, Post, Shop } = require("../database");


const SignUp= async(req,res)=>{
    let body=req.body
    try{
const Password= await bcrypt.hash(body.password,10)
await User.create({
    Uname:body.username,
    Uemail:body.email,
    Upassword:Password},(err,result)=>{
      if (err)console.log(err);
      else res.json(result);
    })
}catch(err){
  console.log(err);
}
}

const Login=async(req,res)=>{
  let body=req.body

const user=await User.findOne({Uname:body.username})

if (!user){
  return { status:'error',error:'username not found'}
}
let Check=await bcrypt.compare(
  body.password,user.Upassword
)
if(Check){
  const token=jwt.sign({name:user.Uname,email:user.Uemail},'topsecret')
  return res.json({user:token,status:'all good'})
}
else{
  return res.json({status:'error',user:false})
}
}

const post=async(req,res)=>{
    let body=req.body
    try{
      await  Post.create(body,(err,result)=>{
        if (err) res.json(err)
        res.json(result)
      })
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {post,SignUp,Login}