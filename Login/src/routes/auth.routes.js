const express= require("express");
const authrouter= express.Router();
const usermodel= require("../models/user.model");
const jwt=require("jsonwebtoken");
const cookie = require("cookie-parser")
const crypto= require("crypto");
authrouter.post("/register",async (req,res)=>{
    const {name,email,password}=req.body;

    const alreadyexists= await usermodel.findOne({email});
    if(alreadyexists){
        return res.status(409).json({
            message:"User already exists"
        })
    }
    const hasedpassword= crypto.createHash("md5").update(password).digest("hex");
    const user= await usermodel.create({
        name,email,password:hasedpassword
    })
    const token=jwt.sign(
        {
            name:user.name,
            id:user._id,
            email:user.email
        },process.env.JWT_SECRET
    )
    res.cookie("Token",token);
    res.status(201).json({
        message:"user registered",
        user
    })
})
authrouter.post("/login", async (req,res)=>{
    const {email,password}=req.body;
    const user= await usermodel.findOne({email});
    if(!user){
        return res.status(201).json({
            message:"User doesnot exist"
        })
    }
    const passwordcorrect= user.password === crypto.createHash("md5").update(password).digest("hex");
    if(!passwordcorrect){
        return res.status(201).json({
            message:"Password incorrect"
        })
    }
    res.status(201).json({
        message:"Logedin succesfully"
    })
})

module.exports=authrouter;