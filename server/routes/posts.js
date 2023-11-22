import express from "express";


const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);


export default router;