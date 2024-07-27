import express from "express";
import { registerTeacher,loginTeacher,postmeetingnotes,getmeetingnotes,announcement,postAnnouncement } from "../controllers/teacher.controller.js";

const router = express.Router();

router.get("/meetingnotes",getmeetingnotes);
router.post("/meetingnotes", postmeetingnotes );
router.post('/cancel',postAnnouncement);
router.get('/announcement',announcement);
router.post('/register',registerTeacher);
router.post('/login',loginTeacher);

export default router;