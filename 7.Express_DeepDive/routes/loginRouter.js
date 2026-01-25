const express = require('express');
const rootDir = require('../utils/pathUtils');
const path = require('path');
const loginRouter = express.Router();

loginRouter.get('/login',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','login.html'));
})

loginRouter.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','login_successful.html'));
})




module.exports = loginRouter;