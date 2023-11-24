import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = "test";

export const signin = async(req, res) => {
   const { email, password } = req.body;

      try {



      } catch (err) {
          res.status(500).json
      }

      



}


export const signup