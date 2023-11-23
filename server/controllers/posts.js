import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
      const PostMessages = await 
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
} 


