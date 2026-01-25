const express = require('express');
const rootDir = require('../utils/pathUtils');
const path = require('path');
const userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','welcome.html'));
})




module.exports = userRouter;