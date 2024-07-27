import express from "express";

const router = express.Router();

router.get("/meeetingnotes",getmeetingnotes);
router.post("/meetingnotest", postmeetingnotes );
router.post('/cancel',cancel);
router.get('/announcement',anouncement);


export default router;