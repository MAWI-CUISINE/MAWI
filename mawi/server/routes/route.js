
const Mawirouter = require('express').Router();
const {post,get}=require('../controller/controller')




Mawirouter.route('/post').post(post)
Mawirouter.route('/getAllPost').get(get)










module.exports =Mawirouter