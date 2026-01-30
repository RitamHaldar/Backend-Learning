require("dotenv").config();
const app=require("./src/app");
const connectodb=require("./src/config/database");

connectodb();
app.listen(3000,()=>{
    console.log("Server Started")
})