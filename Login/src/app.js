const express = require("express");
const app=express();
const authrouter= require("./routes/auth.routes");

app.use(express.json());
app.use("/api/auth",authrouter);
module.exports=app;