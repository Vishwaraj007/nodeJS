const userRequest = (req,res) =>{
    res.write('<html> <body>');
    const body = [];
    if(req.url === "/operation")        //if url is /operation
    {
        res.write('<form method="POST"')
        res.write('<h1>!...SIMPLE CALCULATOR...!');
        res.write('<br>Enter a Number : <input type = "text" name = num1>');
        res.write('<br>Enter Second Number : <input type = "text" name = num2>');
        res.write('<br><input type = "submit">');
    



        req.on('data',(chunk)=>{   // 'data' event
            body.push(chunk);        //pushing chunk of data into 'body' array            ********************BODY IS A ARRAY ****************
            console.log('IN CHUNKS  :           ',chunk);        // printing chunk.......


            const fullBody = Buffer.concat(body).toString();    //concating all chunks into the buffer........
            console.log('IN BUFFER(URL FORMAT)  :             ',fullBody);  // printing buffer (in url format).....


            const params = new URLSearchParams(fullBody);    //making a object of 'URLSearchParams' class to saperate the keys and values.......
            const objBody = {};
            for(const[key,value] of params.entries())
            {
                objBody[key] = value;
            }
            console.log('IN KEY VALUE PAIR FORMAT :                            ',objBody); //printing the keys and values pairs
            const result = Number(objBody.num1) + Number(objBody.num2);
            console.log('Sum : ',result);


            res.write(`The Sum of ${objBody.num1} and ${objBody.num2} is ${result}`);
        });

        /*   ANOTHER EVENT LIKE 'data'
        req.on('end',()=>{
            
         })

         */



    }
    else
    {
        res.write('<form method="POST" action = /operation>');
        res.write('<br><h1>WELCOME TO CALCULATOR</h1><br>');
        res.write('<input type="submit" value = "Click to calculate"><br>');
        res.write('</form>');


    }
    
    
    
    
    
    
    res.write('</form>'); 
} 


module.exports=userRequest;       //exporting the function to run in anouther module.........to load into the server 