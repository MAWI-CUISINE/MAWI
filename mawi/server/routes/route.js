const Mawirouter = require('express').Router();
const {post,get,Precipe}=require('../controller/controller')




Mawirouter.route('/post').post(post)
Mawirouter.route('/getAllPost').get(get)
Mawirouter.route('/postRecipies').post(Precipe)
// Mawirouter.route('/getRecipies').get(get)











module.exports =Mawirouter