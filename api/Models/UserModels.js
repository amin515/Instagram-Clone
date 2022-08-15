
import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true, 'name must be required'],
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : [true, 'email must be required'],
        unique : true,
        trim : true
    },
    cell : {
        type : String,
        trim : true
    },
    username : {
        type : String,
        required : [true, 'username must be required'],
        unique : true,
        trim : true
    },
    age : {
        type : Number,
    },
    gender : {
        type : String,
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    photo : {
        type : String,
    },
    location : {
        type : String,
        default : 'Dhaka'
    },
    isVerified : {
        type : Boolean,
        default : false,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    },
    trash : {
        type : Boolean,
        default : false,
    },
    status : {
        type : Boolean,
        default : true,
    },
}, {
    timestamps : true
})

// export schema
export default  mongoose.model('User', userSchema);