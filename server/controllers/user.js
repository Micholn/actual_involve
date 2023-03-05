import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModal from "../models/user.js";

const secret = 'test';

export const signin = async(req, res) => {
 const {} = '';
    try {

    }

    catch (err) {
        res.status(500).json({ message: "Something went wrong"});
    }
}

export const signup = async(req, res) => {
 const {} = '';
    try {

    }

    catch (err) {
        res.status(500).json({ message: "Something went wrong"});
        console.log(error)
    }
};