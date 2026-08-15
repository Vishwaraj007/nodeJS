const express = require('express');
const users = require("./MOCK_DATA.json");  //importing the users...
const fs = require("fs");
const app = express();

//middlewere for the form data.....it converts the form data into unstructured(key : value) format
app.use(express.urlencoded({extended : false}));

//1) GET /users -----> display all the user(for browser : responce in html(ssr))
app.get("/users",(req,res) => {
    const html = `
    <table border = "1">
    <tr>
        <th>id</th>
        <th>first_name</th>
        <th>last_name</th> 
        <th>email</th> 
        <th>gender</th>
        <th>job_title</th>
    </tr>
    ${users.map(user => `<tr> 
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.job_title}</td>
        </tr>`)}
    </table>
    `;

    res.send(html);
})

// 2) GET /api/users -----> Display all the user (for api (application and mobile) : responce in json(csr))
app.get("/api/users",(req,res) => {
    res.json(users);
})

// 3) GET /api/users/1  -----> display the user with the id 1
app.get("/api/users/:id",(req,res) => {
    const id = Number(req.params.id);
    const user1 = users.find(user => user.id === id);
    return res.json(user1);

});


//4) GET /users/2  -----> diaply the user with the is 2 (HTML)(SSR)
app.get("/users/:id",(req,res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    const html = `
    <table border = "1"> 
        <tr><td>ID</td> <td> ${user.id} </td></tr>
        <tr><td>first_name</td> <td> ${user.first_name} </td></tr>
        <tr><td>last_name</td> <td> ${user.last_name} </td></tr>
        <tr><td>email</td> <td> ${user.email} </td></tr>
        <tr><td>gender</td> <td> ${user.gender} </td></tr>
        <tr><td>job_title</td> <td> ${user.job_title} </td></tr>

    </table>
    `;
    res.send(html);

});


// 4) POST /api/users -----> add new user.
app.post("/api/users",(req,res) =>{
    const body = req.body;
    console.log(body);
    let current_id = users.length+1;
    let user = users.findIndex(user=> user.id === current_id);
    while(user != -1)
    {
        current_id++;
        user = users.findIndex(user=> user.id === current_id);
    }
    users.push({...body,id : current_id});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"completed"});
    });
});

// same for the browser

app.post("/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.end("DATA udloaded");
    })
});


//5) PATCH /api/users/1  --------->   UPDATE the user with id 1
app.patch("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const body = req.body;
    let index = users.findIndex(user => user.id === id)
    users[index] = {...users[index],...body};

    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success"});
    });
});


//6) DELETE /api/users/1  -------->  DELETE the user with id 1

app.delete("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if(index == -1){
        return res.status(404).json({message : "user NOT found"});
    }
    users.splice(index,1);
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
            return res.json({message : "error occured"});
        }
        return res.json({message : "Record deleted"});
    });
});


app.listen(8000,()=>{console.log('serever started...!')});