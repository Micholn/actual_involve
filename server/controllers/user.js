import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModal from "../models/user.js";

const secret = 'test';

export const signin = async(req, res) => {
 const { email, password} = req.body;
    try {

    }

    catch (err) {
        res.status(500).json({ message: "Something went wrong"});
    }
}

export const signup = async(req, res) => {
 const { email, password, firstName, lastName } = req.body;
    try {

    }

    catch (err) {
        res.status(500).json({ message: "Something went wrong"});
        console.log(error)
    }
};
