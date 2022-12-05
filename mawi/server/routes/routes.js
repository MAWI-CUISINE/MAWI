const express = require('express');
const router = express.Router();
const {post}=require('../controller/controller')
router('/post').post(post)