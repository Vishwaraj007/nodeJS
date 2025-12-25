const http = require('http'); // Module for http.

const server = http.createServer((req,res) => {
    console.log(req);
});

const PORT = 3000; //PORT NUMBER....

server.listen(PORT,()=>{
    console.log(`server running at address https://localhost:${PORT}`);
});

/*
    another syntax of server.listen :------------>>>

        server.listen(POST);
            -with this syntax we need to run our code manually in browser with address...
              (localhost:3000)
*/


