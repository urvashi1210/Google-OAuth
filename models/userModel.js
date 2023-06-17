const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
})

exports.User=mongoose.model("User",userSchema);

