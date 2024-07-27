import express from "express";
import {sendfeedback,request,profile,registerStudent,loginStudent} from "../controllers/student.controller.js"

const router = express.Router();

router.post("/feedback",sendfeedback);
router.post("/request", request );
router.get('/',profile);
router.post('/register',registerStudent);
router.post('/login',loginStudent);


export default router;