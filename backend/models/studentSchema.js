const mongoose=require('mongoose')


const studentSchema=new moongose.schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    class:{
        type:Number,
        required: [true,"class is Required"]
    },
    doubtSessionRequired:{
        type:Boolean
    },    
    course:{
        type:String,
        required: [true,"course is Required"]
    }
});

module.exports = mongoose.model('studentSchema',studentSchema)