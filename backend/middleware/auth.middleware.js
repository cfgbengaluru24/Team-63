import jwt from "jsonwebtoken"
import Student from "../models/studentSchema.js"
import Volunteer from "../models/volunteerSchema.js"
import LeaderAdmin from "../models/leaderAdminSchema.js"

const verifyStudentJWT = async (req, res, next) => {
    const accessToken = req?.cookies?.accessToken || req?.header("Authorization")?.replace('Bearer ', '')
    if (!accessToken) {
        return res.status(404).json({ message: "Unauthorized user" })
    }
    try {
        const decoded_token = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const studentId = decoded_token?._id;
        const student = await Student.findById(studentId)
        if (!student) {
            return res.status(400).json({ message: "User not identified" });
        }
        req.Student = student;
        next();
    }
    catch (error) {
        console.log("Error", error)
        return res.status(400).json({ message: "User not verified" })
    }
}
const verifyTeacherJWT = async (req, res, next) => {
    const accessToken = req?.cookies?.accessToken || req?.header("Authorization")?.replace('Bearer ', '')
    if (!accessToken) {
        return res.status(404).json({ message: "Unauthorized user" })
    }
    try {
        const decoded_token = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const teacherId = decoded_token?._id;
        const teacher = await Volunteer.findById(teacherId)
        if (!teacher) {
            return res.status(400).json({ message: "User not identified" });
        }
        req.Teacher = teacher;
        next();
    }
    catch (error) {
        console.log("Error", error)
        return res.status(400).json({ message: "User not verified" })
    }
}

const verifyLeaderAdminJWT = async (req, res, next) => {
    const accessToken = req?.cookies?.accessToken || req?.header("Authorization")?.replace('Bearer ', '')
    if (!accessToken) {
        return res.status(404).json({ message: "Unauthorized user" })
    }
    try {
        const decoded_token = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        const adminId = decoded_token?._id;
        const admin = await LeaderAdmin.findById(adminId)
        if (!admin) {
            return res.status(400).json({ message: "User not identified" });
        }
        req.Admin = admin;
        next();
    }
    catch (error) {
        console.log("Error", error)
        return res.status(400).json({ message: "User not verified" })
    }
}

export {verifyLeaderAdminJWT,verifyStudentJWT,verifyTeacherJWT}