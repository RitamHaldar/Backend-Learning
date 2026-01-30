const mongoose=require("mongoose");
const noteschems= new mongoose.Schema({
    title: String,
    description: String
})
const nodemodel=mongoose.model("task",noteschems);
module.exports=nodemodel