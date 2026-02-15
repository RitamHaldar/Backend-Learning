const mongoose= require("mongoose");

const userschema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique: [true ,"User already exists With this email"]
    },
    password:String
})
const usermodel= mongoose.model("userlogin",userschema);

module.exports=usermodel;