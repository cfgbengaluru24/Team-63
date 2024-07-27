import Announcement from "../models/announcementSchema";
import LeaderAdmin from "../models/leaderAdminSchema";
import Volunteer from '../models/Teacher.js';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from '../utils/asyncHandler.js';

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
