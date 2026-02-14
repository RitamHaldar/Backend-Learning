const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    name:String,
    email: {
        type:String,
        unique:[true,"Email has an registered account"]
    },
    password:String
})
const usermodel= mongoose.model("user",userschema);
module.exports=usermodel;