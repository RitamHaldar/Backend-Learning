const express=require("express")
const notemodel=require("./models/notes.model")
const app=express();
app.use(express.json());
app.post("/notes",async (req,res)=>{
    const {title,description}=req.body;
    const note= await notemodel.create({
        title,description
    })
    console.log("Note Created");
    res.status(201).json({
        note
    })
})
app.get("/notes",async (req,res)=>{
    const notes= await notemodel.find();
    res.status(200).json({
        notes
    })
})

module.exports=app;