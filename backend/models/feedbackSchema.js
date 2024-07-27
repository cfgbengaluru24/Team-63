import mongoose from 'mongoose';

const feedbackSchema=new moongose.Schema({
    studentId: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student', 
        required: true 
    },

    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Volunteer', 
      required: true 
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

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
