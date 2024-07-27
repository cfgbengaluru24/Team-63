import mongoose from 'mongoose';
import bcrypt from "bcrypt"

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    email:{
        type:String,
        required: [true,"Name is Required"],
        unique: true
    },
    password:{
        type:String,
        required: [true,"Password is Required"]
    },
    grade:{
        type:Number,
        required: [true,"class is Required"]
    },
    doubtSessionRequired:{
        type:Boolean
    }
});

studentSchema.pre("save" , async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password , 10)
    next()
})

const Student = mongoose.model('Student', studentSchema);

export default Student;


