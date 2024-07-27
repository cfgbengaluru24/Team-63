import mongoose from 'mongoose';

const feedbackSchema=new moongose.Schema({
    teacherName:{
        type:String
    },
    subject:{
        type:String,
        required: [true,"Subject is Required"]
    },
    comments:{
        type:String,
        required: [true,"Feedback is Required"],
    }
});


const feedback = mongoose.model('feedback', feedbackSchema);

export default feedback;
