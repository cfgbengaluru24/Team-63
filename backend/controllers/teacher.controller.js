import volunteerSchema from "../models/volunteerSchema";
import bcrypt from "bcrypt";
import lessonNotesSchema from "../models/lessonNotesSchema.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerTeacher = async (req, res) => {
    const {fullname, email, username,password,maxQualification,prevYrsOfExp } = req.body
    if ([fullname, email, password, maxQualification, prevYrsOfExp].some((field) => field?.trim() === "")) {
        return new ApiError(400,"All fields must be filled");
    }
    const existedTeacher = await volunteerSchema.findOne({
        $and:[{email:email},{username:username}]
    })
    if (existedTeacher) {
        return new ApiError(404,"User already registered");
    }
    const Teacher = await volunteerSchema.create(
        {
            password: password,
            fullname: fullname,
            email: email.toLowerCase(),
            maxQualification:maxQualification,
            prevYrsOfExp:prevYrsOfExp
        }
    )
    if (!Teacher) {
        return new ApiError(500,"Teacher registration failed");
    }
    const cookies = Teacher.generateAccessToken();
    return res.status(200).json({ message: "Teacher registered successfully", Teacher: Teacher, accessToken: cookies })
}

const loginTeacher = async (req, res) => {
    const {username, email, password } = req.body;
    if (!username || !email || !password) {
        return new ApiError(400,"All details must be filled ");
    }
    const Teacher = await volunteerSchema.findOne({
        $and: [{ username: username }, { email: email }]
    })
    if (!Teacher) {
        return new ApiError(400,"Teacher is not registered");
    }
    const isMatched = await bcrypt.compare(password, Teacher.password);
    if (!isMatched) {
        return new ApiError(400,"Enter valid password");
    }
    const accessToken = volunteerSchema.generateAccessToken();
    return res.status(200).json({ message: "Teacher logged in", accessToken: accessToken })
}

const logoutTeacher = (req, res) => {
    let Teacher = req?.Teacher;
    if (!Teacher) {
        return new ApiError(400,"User is not logged in");
    }
    Teacher.accessToken = undefined;
    return new ApiResponse(200,"User is logged out");
}

const updatePassword = async (req, res) => {
    if (!req.Teacher) {
        return res.status(404).json({ message: "Unauthorized Teacher" })
    }
    const { password } = req.body;
    if (password?.trim() === "") {
        return res.status(400).json({ message: "Password not entered" })
    }
    const prevTeacher = await volunteerSchema.findByIdAndDelete(req?.Teacher?._id)
    if (!prevTeacher) {
        return res.status(400).json({ message: "Teacher not found" })
    }
    const savedTeacher = await volunteerSchema.create({
        username: prevTeacher.username,
        email: prevTeacher.email,
        fullname: prevTeacher.fullname,
        password: password,
        prevYrsOfExp:prevTeacher.prevYrsOfExp,
        maxQualification:prevTeacher.maxQualification
    })

    return res.status(200).json({ message: "Teacher password changed", Teacher: savedTeacher })
}

const getTeacherDetails = async (req, res) => {
    const Teacher = req?.Teacher;
    if (!Teacher) {
        return new ApiError(404 , "Unauthorized access");
    }
    const username= req?.Teacher?.username;
    const email = req?.Teacher?.email
    try {
        const TeacherAggregate = await volunteerSchema.aggregate([
            {
                $match:
                {
                    $and: [{ username:username }, { email: email }]
                },
            },
            {
                $project:
                {
                    username: 1,
                    fullname: 1,
                    email: 1
                }
            }
        ])
        return new ApiResponse(200,{Teacher:TeacherAggregate[0]},"Teacher details fetched")
    }
    catch (error) {
        console.log("Error:", error);
        return new ApiError(500,"Internal Server Error")
    }
}

const postmeetingnotes=async (req,res)=>
{
    const Teacher=req?.Teacher;
    if(!Teacher)
    {
        throw new ApiError(400,"Unauthorized user");
    }
    const meetingnotes=req.body;
    if(!meetingnotes){
        throw new ApiError(404,"Meeting notes must not be empty");
    }
    const createdMeetingNotes=await lessonNotesSchema.create(
        {
            lesson_id:meetingnotes.lesson_id,
            course:meetingnotes.course,
            notes:meetingnotes.notes
        }
    )
    return new ApiResponse(200,createdMeetingNotes,"Meeting notes added");
}

// const getmeetingnotes=async (req,res)=>
// {
//     const Teacher = req?.Teacher;
//     if (!Teacher) {
//         throw new ApiError(400, "Unauthorized user");
//     }
//     const meetingnotes=
// }

// const announcement=async (req,res)=>
// {
//     const Teacher=req?.Teacher
//     if(!Teacher){
//         throw new ApiError(400,"Unauthorized user");
//     }
//     const ann=req?.body;
//     if(!ann)
//     {
//         throw new ApiError(400,"Announcement must not be empty");
//     }

// }
export {
    registerTeacher,
    loginTeacher,
    logoutTeacher,
    updatePassword,
    getTeacherDetails,
    postmeetingnotes
}