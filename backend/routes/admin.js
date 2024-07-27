import express from "express";

const router = express.Router();

router.post("/postannouncement",postannouncement);

router.post('/register',registerStudent);
router.post('/login',loginStudent);


export default router;