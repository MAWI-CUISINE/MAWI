const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {Post}=require("../database")

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


const post=async(req,res,next)=>{
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
module.exports = {post}