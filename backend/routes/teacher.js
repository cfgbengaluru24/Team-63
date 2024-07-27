import express from "express";

const router = express.Router();

router.get("/meetingnotes",getmeetingnotes);
router.post("/meetingnotes", postmeetingnotes );
router.post('/cancel',cancel);
router.get('/announcement',anouncement);
router.post('/register',registerStudent);
router.post('/login',loginStudent);

export default router;