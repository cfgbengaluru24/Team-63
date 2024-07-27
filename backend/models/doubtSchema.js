// models/Doubt.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const DoubtSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'Resolved'],
        default: 'Open'
    },
    resolvedAt: {
        type: Date
    }
}, {
    timestamps: true
});

const Doubt =mongoose.model('Doubt', DoubtSchema);

export default Doubt;
