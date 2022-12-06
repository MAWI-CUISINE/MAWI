
const Mawirouter = require('express').Router();
const {post}=require('../controller/controller')
Mawirouter.route('/post').post(post)
module.exports =Mawirouter