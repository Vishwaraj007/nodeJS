const express = require('express');
const app = express();

app.use("/",(req,res,next)=>{
    console.log(req.url);
    res.send(`<form method = "POST" action = "/">
        Enter Your NAme : <input type="text" name="Uname"><br>
        Enter Your roll no. : <input type="text" name="r_no"><br>
        <input type= "submit" value ="tab to submit"> </input>
        </form>
        `);
})



const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server is running on port : http://localhost:${PORT}`);
})



