import mongoose from 'mongoose';

const lessonNotesSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Course is Required"]
    },
    notes: {
        type: String,
        required: [true, "notes are Required"]
    },
    studentmail:
    {
        type: String,

    }
})

const LessonNotes = mongoose.model('LessonNotes', lessonNotesSchema);

export default LessonNotes;


