const express=require("express");
const userroutes=require("./routes/auth.routes");
const app=express();
app.use(express.json());
app.use("/api/auth",userroutes);

module.exports=app;