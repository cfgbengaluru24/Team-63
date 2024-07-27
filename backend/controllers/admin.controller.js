import Announcement from "../models/announcementSchema.js";
import LeaderAdmin from "../models/leaderAdminSchema.js";
import Volunteer from '../models/volunteerSchema.js';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from '../utils/asyncHandler.js';

// Method to reschedule a class based on an announcement
export const rescheduleClass = asyncHandler(async (req, res) => {
    const { announcementId, newVolunteerId } = req.body;

    // Ensure announcement exists
    const announcement = await Announcement.findById(announcementId);
    if (!announcement) {
        return res.status(404).json(new ApiError(404,"no such announcement"));
    }


    const newVolunteer = await Volunteer.findById(newVolunteerId);
    if (!newVolunteer) {
        return res.status(404).json(new ApiError(404,"no such volunteer"));
    }
    res.status(200).json(new ApiResponse(200,newVolunteer,"found New Volunteer"));
});

const registerAdmin = async (req, res) => {
    const { fullname, email, username, password } = req.body
    if ([fullname, email, password].some((field) => field?.trim() === "")) {
        return new ApiError(400, "All fields must be filled");
    }
    const existedAdmin = await Volunteer.findOne({
        $and: [{ email: email }, { username: username }]
    })
    if (existedAdmin) {
        return new ApiError(404, "User already registered");
    }
    const Admin = await LeaderAdmin.create(
        {
            password: password,
            fullname: fullname,
            email: email.toLowerCase(),
            subject: subject.toLowerCase(),
            doubtSessionPending: false
        }
    )
    if (!Admin) {
        return new ApiError(500, "Admin registration failed");
    }
    const cookies = Teacher.generateAccessToken();
    return res.status(200).json({ message: "Admin registered successfully", Teacher: Admin, accessToken: cookies })
}

const loginAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return new ApiError(400, "All details must be filled ");
    }
    const Admin = await Admin.findOne({
        $and: [{ username: username }, { email: email }]
    })
    if (!Admin) {
        return new ApiError(400, "Admin is not registered");
    }
    const isMatched = await bcrypt.compare(password, Admin.password);
    if (!isMatched) {
        return new ApiError(400, "Enter valid password");
    }
    const accessToken = Admin.generateAccessToken();
    return res.status(200).json({ message: "Teacher logged in", accessToken: accessToken })
}

export {loginAdmin,registerAdmin};
