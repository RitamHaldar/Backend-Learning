const express=require("express");
const notemodel=require("./model/note.model")
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors());
app.post("/api/notes",async (req,res)=>{
    const {title,description}=req.body;
    const note=await notemodel.create({
        title,description
    })
    res.status(201).json({
        message:"Note Created Successfully",
        note
    })
})
app.get("/api/notes", async (req,res)=>{
     const notes=await notemodel.find();
    res.status(200).json({
        notes
    })
})
app.delete("/api/notes/:id",async (req,res)=>{
    await notemodel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message:"Note Deleted"
    })
})
app.patch("/api/notes/:id",async (req,res)=>{
    const {description}=req.body;
    await notemodel.findByIdAndUpdate(req.params.id,{description})
    res.status(200).json({
        message:"Note updated"
    })
})
module.exports=app;