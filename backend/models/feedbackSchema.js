const moongose=require('moongose')

const feedbackSchema=new moongose.schema({
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

module.exports = mongoose.model('feedbackSchema',feedbackSchema)