console.log("Hello mars");

const fs = require('fs');
fs.writeFile('text.txt',"HELLO  MARS....!",(err) =>
{
    if(err) console.log("Error occured during writing in the file");
    else console.log("File written successfully...!");
})
