import express from "express";

const router = express.Router();

router.post("/feedback",sendfeedback);
router.post("/request", request );
router.get('/',profile)

export default router;