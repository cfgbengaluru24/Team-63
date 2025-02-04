import mongoose from 'mongoose';
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
dotenv.config();

const volunteerSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    password:{
        type:String,
        required: [true,"Password is Required"]
    },
    email:{
        type:String,
        required: [true,"Email is Required"]
    },
    doubtSessionPending:{
        type:Boolean
    },
    subject:{
        type:String,
        required: [true,"course is Required"]
    }
});

volunteerSchema.methods.generateAccessToken = function () {
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

volunteerSchema.pre("save", async function () {

    if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 10);
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
