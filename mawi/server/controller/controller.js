const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SignUp= async(req,res)=>{
    const body=req.body
    try{
const Password= await bcrypt.hash(body.Password,10)
await ''.create({
    Uname:body.username,
    Uemail:body.email,

    Upassword:Password,
   

})
}catch(err){}

}