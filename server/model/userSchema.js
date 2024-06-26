const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6]
    }
})


const User=mongoose.model('user',UserSchema);

module.exports=User;