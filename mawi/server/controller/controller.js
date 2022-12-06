// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const {Post, Recipe}=require("../database")

const { model } = require("mongoose");
// const SignUp= async(req,res)=>{
//     const body=req.body
//     try{
// const Password= await bcrypt.hash(body.Password,10)
// await User.create({
//     Uname:body.username,
//     Uemail:body.email,
//     Upassword:body.Password})
// }catch(err){}
// }


const post=async(req,res)=>{
    const body=req.body
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
const Precipe=async(req,res)=>{
    const body=req.body
    try{
      await  Recipe.create(body,(err,result)=>{
        if (err) res.json(err)
        res.json(result)
      })
    }
    catch(err){
        console.log(err);
    }
}
const get=async(req,res)=>{
  try{
      await Post.find({}).then (result=>{res.send(result)})
  }
  catch(err){
      res.send(err)
  }
}
module.exports = {post ,get,Precipe}