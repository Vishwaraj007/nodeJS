const express = require('express');
const rootDir = require('./utils/pathUtils');
const homeRouter = require('./routes/homeRouter');
const loginRouter = require('./routes/loginRouter');
const path = require('path');
const app = express();

app.use(express.urlencoded()); //to get data in body when form get submitted...!

app.use(loginRouter);
app.use(homeRouter);

app.use((req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','error.html'));
})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`App IS RUNNING ON PORT : http://localhost:${PORT}`);
})


