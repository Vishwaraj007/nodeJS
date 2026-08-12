const express = require("express");
const fs = require("fs");
const { convertProcessSignalToExitCode } = require("util");

const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    const file_content = fs.readFileSync("./data.json","utf-8");
    const content_json = JSON.parse(file_content);
    const id = Number(req.query.id);
    let task = content_json.task.find((task)=> task.id === id);
    if(!task)
    {
        res.end("task Not found");
    }
    else{
        res.json(task);
    }
    console.log(content_json.task);

});

app.post("/",(req,res)=>{
    let body = req.body;
    console.log("body : ");
    console.log(body);
    let json_body = body;
    const file_content2 = fs.readFileSync("./data.json","utf-8");
    console.log("file content in text : ");
    console.log(file_content2);
    const file_content_json = JSON.parse(file_content2);
    let curr_length = file_content_json.index.length;
    json_body["id"] = curr_length;
    file_content_json.task.push(json_body);
    file_content_json.index.push(curr_length);
    console.log(file_content_json);

    body = JSON.stringify(file_content_json);

    fs.writeFile("./data.json",body,(err)=>{
        console.log(err);
        return;
    });

    res.end("data added...!");
    
});

app.listen(8000,()=>{
    console.log("server started...!");
})