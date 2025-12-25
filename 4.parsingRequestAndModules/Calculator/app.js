const http = require('http');
const request = require('./request');   //importing the function exported by another module


const server = http.createServer(request);

const PORT = 3001;

server.listen(PORT,()=>{
    console.log(`Server is running on port : http://localhost:${PORT}`);

});



