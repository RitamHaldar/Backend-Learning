const express=require("express");
const userModel=require("../model/user.model")
const userRouter=express.Router();
const jsonwebtoken=require("jsonwebtoken");
const cookieparser=require("cookie-parser");
userRouter.post("/register",async (req,res)=>{
    const {name,email,password}=req.body;
    const Alreadyexists=await userModel.findOne({email});
    if(Alreadyexists){
        return res.status(400).json({
            message:"User already exists"
        })
    }
    const user= await userModel.create({
        name,
        email,
        password
    })
    
    const token=jsonwebtoken.sign({
        name,
        email
    },process.env.JWT_SECRET);
   
    res.cookie("jwt_token",token);
     res.status(201).json({
        message:"User registered ",
        user,
        token
    })
})
module.exports=userRouter;