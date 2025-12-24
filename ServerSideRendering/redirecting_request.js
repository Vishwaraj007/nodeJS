const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");

  if (req.url === "/home") {
    res.write(`
      <html>
      <head>
        <style>
          body { font-family: Arial; background: #f4f4f4; text-align: center; }
          h1 { color: #2c3e50; }
        </style>
      </head>
      <body>
        <h1>WELCOME TO HOME PAGE</h1>
      </body>
      </html>
    `);
  }

  else if (req.url === "/men") {
    res.write(`
      <html>
      <head>
        <style>
          body { background: #e3f2fd; text-align: center; font-family: Arial; }
        </style>
      </head>
      <body>
        <h1>WELCOME TO MEN PAGE</h1>
      </body>
      </html>
    `);
  }

  else if (req.url === "/women") {
    res.write(`
      <html>
      <head>
        <style>
          body { background: #fce4ec; text-align: center; font-family: Arial; }
        </style>
      </head>
      <body>
        <h1>WELCOME TO WOMEN PAGE</h1>
      </body>
      </html>
    `);
  }

  else if (req.url === "/child") {
    res.write(`
      <html>
      <head>
        <style>
          body { background: #fff9c4; text-align: center; font-family: Arial; }
        </style>
      </head>
      <body>
        <h1> WELCOME TO CHILD PAGE</h1>
      </body>
      </html>
    `);
  }

  else if (req.url === "/cart") {
    res.write(`
      <html>
      <head>
        <style>
          body { background: #ede7f6; text-align: center; font-family: Arial; }
        </style>
      </head>
      <body>
        <h1>THIS IS YOUR CART</h1>
      </body>
      </html>
    `);
  }

  else if (req.url === "/about_us") {
    res.write(`
      <html>
      <head>
        <style>
          body { background: #e0f2f1; text-align: center; font-family: Arial; }
        </style>
      </head>
      <body>
        <h1>DEVELOPED BY</h1>
        <h2>VISHWARAJ JOSHI</h2>
      </body>
      </html>
    `);
  }

  else {
    res.write(`
      <html>
      <head>
        <style>
          body {
            background: #f5f5f5;
            font-family: Arial;
            text-align: center;
          }
          a {
            display: inline-block;
            margin: 10px;
            padding: 12px 25px;
            text-decoration: none;
            background: #3498db;
            color: white;
            border-radius: 5px;
          }
          a:hover {
            background: #2c3e50;
          }
        </style>
      </head>
      <body>
        <h1>SHOPPING MENU</h1>
        <a href="/home">HOME</a>
        <a href="/men">MEN</a>
        <a href="/women">WOMEN</a>
        <a href="/child">CHILD</a>
        <a href="/cart">CART</a>
        <a href="/about_us">ABOUT US</a>
      </body>
      </html>
    `);
  }

  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Listening at port : http://localhost:${PORT}`);
});
