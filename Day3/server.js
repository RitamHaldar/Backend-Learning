const express=require("express");
const app=express();
app.use(express.json());
let notes=[];
 app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.send("notes details")
 })
 app.get("/notes",(req,res)=>{
    res.send(notes);
 })
app.listen(3000,()=>{
    console.log("Server is Running")
})