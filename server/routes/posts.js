import express from "express";


const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch()


export default router;