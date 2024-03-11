import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = "test";

export const signin = async(req, res) => {
   const { email, password } = req.body;

      try {
        const oldUser = await UserModal.findOne({ email });

        if(!oldUser) return res.status(404).json({ message: "User does