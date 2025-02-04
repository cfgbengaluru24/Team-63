import Volunteer from "../models/volunteerSchema.js";
import bcrypt from "bcrypt";
import lessonNotes from "../models/lessonNotesSchema.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import Student from "../models/studentSchema.js";

const registerTeacher = async (req, res) => {
    const { name, email, username, password, subject } = req.body
    if ([name, email, password, subject].some((field) => field?.trim() === "")) {
        return new ApiError(400, "All fields must be filled");
    }
    const existedTeacher = await Volunteer.findOne({
        $and: [{ email: email }, { username: username }]
    })
    if (existedTeacher) {
        return new ApiError(404, "User already registered");
    }
    const Teacher = await Volunteer.create(
        {
            password: password,
            name: username,
            email: email.toLowerCase(),
            subject: subject.toLowerCase(),
            doubtSessionPending: false
        }
    )
    if (!Teacher) {
        return new ApiError(500, "Teacher registration failed");
    }
    const cookies = Teacher.generateAccessToken();
    return res.status(200).json({ message: "Teacher registered successfully", Teacher: Teacher, accessToken: cookies })
}

const loginTeacher = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return new ApiError(400, "All details must be filled ");
    }
    const Teacher = await Volunteer.findOne({
        email: email
    })
    if (!Teacher) {
        return new ApiError(400, "Teacher is not registered");
    }
    const isMatched = await bcrypt.compare(password, Teacher.password);
    if (!isMatched) {
        return new ApiError(400, "Enter valid password");
    }
    const accessToken = Teacher.generateAccessToken();
    return res.status(200).json({ message: "Teacher logged in", accessToken: accessToken })
}

const logoutTeacher = (req, res) => {
    let Teacher = req?.Teacher;
    if (!Teacher) {
        return new ApiError(400, "User is not logged in");
    }
    Teacher.accessToken = undefined;
    return new ApiResponse(200, "User is logged out");
}

const updatePassword = async (req, res) => {
    const { password } = req.body;
    if (password?.trim() === "") {
        return res.status(400).json({ message: "Password not entered" })
    }
    const prevTeacher = await Volunteer.findByIdAndDelete(req?.Teacher?._id)
    if (!prevTeacher) {
        return res.status(400).json({ message: "Teacher not found" })
    }
    const savedTeacher = await Volunteer.create({
        username: prevTeacher.username,
        email: prevTeacher.email,
        fullname: prevTeacher.fullname,
        password: password,
        subject: prevTeacher.subject,
        doubtSessionPending: prevTeacher.doubtSessionPending
    })

    return res.status(200).json({ message: "Teacher password changed", Teacher: savedTeacher })
}

const profile = async (req, res) => {
    const Teacher = req?.Teacher;
    if (!Teacher) {
        return new ApiError(404, "Unauthorized access");
    }
    const username = req?.Teacher?.username;
    const email = req?.Teacher?.email
    try {
        const existedTeacher = await Volunteer.findOne(
            {
                $and: [{ username: username }, { email: email }]
            }
        )
        return new ApiResponse(200, { Teacher: existedTeacher }, "Teacher details fetched")
    }
    catch (error) {
        console.log("Error:", error);
        return new ApiError(500, "Internal Server Error")
    }
}

const postmeetingnotes = async (req, res) => {
    const { course, email, notes } = req.body;
    console.log(course, email, notes)
    if (!course || !email || !notes) {
        throw new ApiError(404, "Meetingnotes must not be empty");
    }
    const createdMeetingNotes = await lessonNotes.create(
        {
            studentmail: email,
            subject: course,
            notes: notes
        }
    )
    const existedStudent = await Student.findOne(
        {
            email: email
        }
    )
    if (!existedStudent) {
        throw new ApiError(400, "Student mail is invalid");
    }
    return new ApiResponse(200, createdMeetingNotes, "Meeting notes added");
}

const getmeetingnotes = async (req, res) => {
    const studentmail = req.params['studentmail'];
    console.log(studentmail)
    if (!studentmail) {
        throw new ApiError(400, "student mail must not be empty");
    }
    const requiredNotes = await lessonNotes.find({
        studentmail: studentmail
    })
    console.log(requiredNotes)
    return res.status(200).json(new ApiResponse(200, { meetingnotes: requiredNotes }));
}

const postAnnouncement = async (req, res) => {
    const { date, reason } = req.body;
    if (!date || !reason) {
        throw new ApiError(400, "All fields must be filled");
    }
    const announcement = await announcement.create(
        {
            teacherId: teacher._id,
            date: date,
            reason: reason
        }
    )
    return new ApiResponse(200, { announcement: announcement }, "User has announced successfully");
}

const announcement = async (req, res) => {
    const announcements = await announcement.findAll();
    return new ApiResponse(200, announcements, "All announcements retrieved successfully")

}
export {
    registerTeacher,
    loginTeacher,
    logoutTeacher,
    updatePassword,
    profile,
    postmeetingnotes,
    getmeetingnotes,
    announcement,
    postAnnouncement
}