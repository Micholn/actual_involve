import express from 'express';
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/sigin", signin);
router.post("/signup", signup);

export default router;


