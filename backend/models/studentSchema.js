import mongoose from 'mongoose';



const studentSchema=new moongose.Schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    email:{
        type:String,
        required: [true,"Name is Required"]
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

const Student = mongoose.model('Student', studentSchema);

export default Student;


