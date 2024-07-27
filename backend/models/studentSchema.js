import mongoose from 'mongoose';



const studentSchema=new moongose.Schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    email:{
        type:String,
        required: [true,"Name is Required"],
        unique: true
    },
    password:{
        type:String,
        required: [true,"Password is Required"]
    },
    grade:{
        type:Number,
        required: [true,"class is Required"]
    },
    doubtSessionRequired:{
        type:Boolean
    }
});
studentSchema.methods.generateAccessToken = function () {
    const accessToken = jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_SPAN
        }
    )
    return accessToken
}

studentSchema.pre("save", async function () {

    if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 10);
})
const Student = mongoose.model('Student', studentSchema);

export default Student;


