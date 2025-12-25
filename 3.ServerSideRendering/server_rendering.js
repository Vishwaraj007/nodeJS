const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
   
    console.log(req.url);
    if(req.url === "/output")
    {
        res.write("<HTML>");
        res.write('<body> <h1> THIS IS OUPUT PAGE .....!</h1></body>');
        res.write("</HTML>");
    }
    else 
    {
         res.write("<HTML>");
    res.write('<body><form method = "POST" action = "/output"> Enter your Name : <input type = "text" name = "NAME"> <br> <input type = "submit"> </form> </body>');
    res.write("</HTML>");

    }
});

const PORT = 3001;
server.listen(PORT,()=>{

    console.log(`serevr listening at http://localhost:${PORT}`);
});




