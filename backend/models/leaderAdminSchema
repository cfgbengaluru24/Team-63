import mongoose from 'mongoose';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

const leaderAdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name is Required"]
    },
    password:{
        type:String,
        required: [true,"Password is Required"]
    },
    doubtSessionRequired:{
        type:Boolean
    },
    announcement:{
        type:String
    } 
});

leaderAdminSchema.methods.generateAccessToken = function () {
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

leaderAdminSchema.pre("save", async function () {

    if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 10);
})

const LeaderAdmin = mongoose.model('LeaderAdmin', leaderAdminSchema);

export default LeaderAdmin;

