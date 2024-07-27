import express from "express";

const router = express.Router();

router.post("/feedback",sendfeedback);
router.post("/request", request );
router.get('/',profile);
router.post('/register',registerStudent);
router.post('/login',loginStudent);


export default router;