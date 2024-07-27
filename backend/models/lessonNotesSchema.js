import mongoose from 'mongoose';

const lessonNotesSchema=new moongose.Schema({
    subject:{
        type:String,
        required: [true,"Course is Required"]
    },
    notes:{
        type:String,
        required: [true,"notes are Required"]
    }
})

const LessonNotes = mongoose.model('LessonNotes', lessonNotesSchema);

export default LessonNotes;


