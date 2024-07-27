import mongoose from 'mongoose';



const studentSchema=new moongose.Schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    password:{
        type:String,
        required: [true,"Password is Required"]
    },
    class:{
        type:Number,
        required: [true,"class is Required"]
    },
    doubtSessionRequired:{
        type:Boolean
    },    
    course:{
        type:String,
        required: [true,"course is Required"]
    }
});

const student = mongoose.model('student', studentSchema);

export default student;


