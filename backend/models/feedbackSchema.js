const moongose=require('moongose')

const feedbackSchema=new moongose.schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    role:{
        type:String,
        required: [true,"Role is Required"],
        enum:["Student","Volunteer","Leader Admin"]
    },
    feedback:{
        type:String,
        required: [true,"Feedback is Required"],
    }
});

module.exports = mongoose.model('feedbackSchema',feedbackSchema)