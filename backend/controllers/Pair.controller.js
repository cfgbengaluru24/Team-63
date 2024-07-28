import Pair from "../models/PairSchema.js"
import Volunteer from "../models/volunteerSchema.js"
import Student from "../models/studentSchema.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const scheduleMeeting=async (req,res)=>{
    const {teachername,studentname,subject}=req.body;
    const teacher=await Volunteer.findOne(
        {
            name:teachername
        }
    )
    const student =await Student.findOne(
        {
            name:studentname
        }
    )
    if(!teacher || !student){
        return res.status(400).json(new ApiError(400,"Either teacher or student name is not valid"))
    }
    const createdpair=Pair.create(
        {
            studentId:teacher._id,
            teacherId:student._id,
            startTime:"5:30am",
            endTime:"7:00pm",
            subject:subject,
            meetingLink:"https://zoom.com"
        }
    )
    return new ApiResponse(200,{createdpair:createdpair},"meeting scheduled");
}

const deleteMeeting=async (req,res)=>
{
    const {studentname,teachername,subject}=req.body;
    const student=await Student.findOne(
        {
            name:studentname
        }
    )
    const teacher=await Volunteer.findOne(
        {
            name:teachername
        }
    )
    const existedPair=await Pair.findOne(
        {
            $and:[{teacherId:teacher?._id},{studentId:student?._id},{subject:subject
            }]
        }
    )
    if(!existedPair){
        return res.status(400).json(new ApiError(400,"No such meeting is scheduled"));
    }
    await Pair.findByIdAndDelete(
        existedPair?._id
    )
    return new ApiResponse(200,{},"meeting is deleted");
}

export {deleteMeeting,scheduleMeeting}