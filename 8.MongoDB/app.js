const mongoose = require("mongoose");
const express = require("express")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    roll_no : {
        type : Number,
        required : true,
        unique : true
    }
});

const student = mongoose.model("student",schema);

mongoose.connect("mongodb://127.0.0.1:27017");

app.get("/api/student",async (req,res)=>{ 
    res.json(await student.find({}));

});
app.get("/api/student/:id",async (req,res)=>{ 
    const user = await student.findById(req.params.id);
    if(!user) return res.status(404).json({msg:"Id not found"})
    return res.json(user).status(201);


});

app.post("/api/student",async(req,res)=>{
    const body = req.body;
    console.log(body);
    
    await student.create({
        name : body.name,
        roll_no : body.roll_no
    });
    res.status(201).json({status: "entry inserted...!"})
});

app.patch("/api/student/:id", async(req,res)=>{
    const body = req.body;
    console.log(body);
    try{
    const entry = await student.findByIdAndUpdate(req.params.id,body,{returnDocument : "after"});
    if(!entry)
    {
        return res.status(404).json({msg:"User is not there"});
    }
    return res.json({"msg" : "entry updated"});
    }
    catch(err)
    {
        return res.status(500).json({msg : "server side error...!"});
    }

});

app.delete("/api/student/:id",async(req,res)=>{
    try{
        const stud = await student.findByIdAndDelete(req.params.id);
        if(!stud){
            return res.status(404).json({msg : "Entry not found to delete...!"});
        }
        return res.status(200).json({msg:"Successfully deleted the entry...!"});
    
    }catch(err)
    {
        return res.status(500).json({msg:"server side error...!"});
    }
});


app.listen(8000,()=>console.log("server started...!"));