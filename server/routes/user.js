import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signup", signin);
router.post("/signup", signup);

export default router;