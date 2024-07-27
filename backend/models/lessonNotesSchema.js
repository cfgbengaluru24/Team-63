const mongoose=require('mongoose')


const lessonNotesSchema=new moongose.schema({
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

module.exports = mongoose.model('lessonNotesSchema',lessonNotesSchema)

