const app=require("./src/app")
const mongoose=require("mongoose")
mongoose.connect("uri").then(()=>{
    console.log("Connected")
})
app.listen(3000,()=>{
    console.log("Server started")
})