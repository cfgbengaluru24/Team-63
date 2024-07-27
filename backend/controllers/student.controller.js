import { asyncHandler } from "../utils/asyncHandler.js"
import Student from "../models/studentSchema.js"
import Feedback from "../models/feedbackSchema.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerStudent=asyncHandler(
    async (req, res) => {
       const {name,email,grade,password}=req.body
    
       if(
            !name || !email || !grade || !password
        ){
            throw new ApiError(400, "all fields are required")
        }
        
        const existedStudent=await Student.findOne({email})
    
        if(existedStudent){
            throw new ApiError(409, "student with email already exists")
        }
    
        const student = await Student.create({
            name,
            grade,
            email ,
            password,
        })
    
        const createdStudent=await Student.findById(student._id).select(
            "-password "
        )
    
        if(!createdStudent)
            {
                throw new ApiError(500, "something went wrong while registering student")
            }
    
        return res.status(201).json(
            new ApiResponse(200, createdStudent, "Student registered successfully")
        )
    }
)

const loginStudent=asyncHandler(
    async (req, res) => {
        const {email,password} = req.body;

        if(!email)
            {
                throw new ApiError(400,"email is required")
            }
    
        const student = await Student.findOne({ email });

    
        if(!student)
            {
                throw new ApiError(404, " student doesn't exist ")
            }
        const loggedInUser= await Student.findById(student._id).select("-password ")
    
        // const options = {
        //     httpOnly : true,
        //     secure : true
        // }
    
        return res
        .status(200)
        // .cookie("accessToken" , accessToken, options)
        // .cookie("refreshToken" , refreshToken , options)
        .json(
            new ApiResponse(
                200,
                {
                    student : loggedInUser
                },
                "student logged in successfully"
            )
        )
    }
)
const profile=asyncHandler(
    async (req, res) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);

    if (!student) {
        return res.status(404).json(  new ApiError(404, "Student not found"));
    }

    res.status(200).json(  new ApiResponse(404,student));

    }
)

const sendfeedback=asyncHandler(
   async(req,res)=>{
    const { studentId, teacherId, comments,subject } = req.body;

    // Ensure student exists
    const student = await Student.findById(studentId);
    if (!student) {
        return res.status(404).json(new ApiError(400,"student not found"));
    }

    // Ensure teacher exists
    const volunteer = await Volunteer.findById(teacherId);
    if (!volunteer) {
        return res.status(404).json(new ApiError(400,"no volunteer"));
    }

    // Create new feedback entry
    const feedback = new Feedback({
        studentId,
        teacherId,
        comments,
        subject
    });

    // Save feedback to the database
    await feedback.save();

    res.status(201).json(new ApiResponse(200,feedback,"feedback saved successfully"));
  }
)

const request=asyncHandler(
    async(req,res)=>{
        const { studentId, subject, description } = req.body;

        // Ensure student exists
        const student = await Student.findById(studentId);
        if (!student) {
            throw new ApiError(404,"student not found");
        }
    
        // Create new doubt entry
        const doubt = new Doubt({
            studentId,
            subject,
            description
        });
    
        // Save doubt to the database
        await doubt.save();
    
        res.status(201).json(new ApiResponse(200,doubt,"doubt raised successfully"));
    }
)

export {
    profile,
    sendfeedback,
    request,
    registerStudent,
    loginStudent
}

