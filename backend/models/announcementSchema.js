import mongoose from 'mongoose';
const { Schema } = mongoose;

const AnnouncementSchema = new Schema({
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Volunteer',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Announcement = mongoose.model('Announcement', AnnouncementSchema);

export default Announcement;
