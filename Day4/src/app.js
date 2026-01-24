const express=require("express");
const app=express();
app.use(express.json());
let notes=[];
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.send("Note added");
    console.log(notes);
})
app.get("/notes",(req,res)=>{
    res.send(notes);
})
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index];
    res.send("Note deleted");
})
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description=req.body.description;
    res.send("Description updated");
})
app.put("/notes/:index",(req,res)=>{
    notes[req.params.index].title=req.body.description;
    notes[req.params.index].description=req.body.description;
    res.send("Tile and Description Updated");
})
module.exports=app;