import mongoose from 'mongoose';
const { Schema } = mongoose;

const PairSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    teacherId:{
        type: Schema.Types.ObjectId,
        ref: 'Volunteer',
        required: true
    },
    startTime:
    {
        type:String
    },
    endTime:
    {
        type:String
    },
    meetingLink:
    {
        type:String
    }
}, {
    timestamps: true
});

const Pair=mongoose.model('Pair', PairSchema);

export default Pair;
