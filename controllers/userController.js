const mongoose=require('mongoose')

const {User} = require("../models/userModel");

//Register User
exports.register=async(req,res)=>{

    const user=await User.findOne({username:req.body.username});
    
    if(user)return res.status(400).send("User already exists");
    
    const newUser=await User.create(req.body);
    
    res.status(201).send(newUser);
    
    console.log("User added!")
    
};

//Login  User
exports.login=async(req,res)=>{

}

//Profile
exports.getUserdetails=(req,res)=>{
    res.send(req.user);
}

//Logout User
exports.logout=(req,res)=>{
    req.logout();
    res.redirect("/login");
}