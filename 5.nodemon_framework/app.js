const http = require('http');
const request = require('./request');


const server = http.createServer(request);

const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`server is running on  : http://localhost:${PORT}`);
});


