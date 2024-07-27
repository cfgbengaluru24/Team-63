import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = express.Router();

// router.post("/postannouncement",postannouncement);

router.post('/register',registerAdmin);
router.post('/login',loginAdmin);


export default router;