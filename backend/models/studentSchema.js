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

const student = mongoose.model('student', studentSchema);

export default student;


