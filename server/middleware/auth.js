import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try {
     const token = req.headers.authorization.split(" ")[1];
     const isCustomAuth = 


     next();   
    } catch {
        console.log(error);
    }
};

export default auth;