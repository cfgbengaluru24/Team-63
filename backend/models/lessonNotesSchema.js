import mongoose from 'mongoose';

const lessonNotesSchema=new moongose.Schema({
    lesson_id:{
        type:Number,
        required: [true,"Lesson id is Required"]
    },
    course:{
        type:String,
        required: [true,"Course is Required"]
    },
    notes:{
        type:String,
        required: [true,"notes are Required"]
    }
})

const lessonNotes = mongoose.model('lessonNotes', lessonNotesSchema);

export default lessonNotes;


