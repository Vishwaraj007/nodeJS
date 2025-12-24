const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");

  if (req.url === "/home") {
    res.write("WELCOME TO HOME PAGE...!");
  }
  
  else if (req.url === "/men") {
    res.write("<h1>WELCOME TO men PAGE...!</h1>");
  } 

  else if (req.url === "/women") {
    res.write("<h1>WELCOME TO women PAGE...!</h1>");
  } 

  else if(req.url === "/child") {
    res.write("<h1>WELCOME TO CHILD PAGE...!</h1>");
  } 

  else if (req.url === "/cart") {
    res.write("<h1>THIS IS YOUR CART...!</h1>");
  } 

  else if (req.url === "/about_us") {
    res.write("<h1>DEVELOPER : VIRAT JOSHI </h1>");
  } 
  
  
  
  
  
  
  else {
    res.write(
      '<html><body> <a href="/home">HOME</a>  <br>    <a href="/men">MEN</a>    <br>   <a href="/women">WOMEN</a> <br>    <a href="/child">CHILD</a><br>     <a href="/cart">CART</a>      <br>           <a href="/about_us">About US</a> </body> </html>'
    );
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Listening at port : http://localhost:${PORT}`);
});
