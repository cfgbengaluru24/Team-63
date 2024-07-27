import express from "express";

const router = express.Router();

router.get("/meetingnotes",getmeetingnotes);
router.post("/meetingnotes", postmeetingnotes );
router.post('/cancel',cancel);
router.get('/announcement',anouncement);


export default router;