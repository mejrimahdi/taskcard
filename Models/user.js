

const mongoose=require("mongoose")

const schema=mongoose.Schema

const user= new schema ({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        default:18
    },
    phone:{
        type:Number,
        required:true
    },
    photo:{
        type:String
    },
})

module.exports=mongoose.model("user",user)