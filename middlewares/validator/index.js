const ProductBrand = require("../../models/ProductBrand")
const ProductImages = require("../../models/ProductImages")
const Category = require("../../models/Category")
const _ = require('lodash')
const path = require("path")
const fs = require("fs");
const { districts } = require("../common");
exports.validateLead = (req, res, next) => {
    //email is not null, valid and normalized
    req.check("email", "Email must be between 3 to 32 characters")
        .matches(/.+\@+\..+/)
        .withMessage("Invalid email")
        .isLength({
            min: 4,
            max: 2000
        });
    // check for errors
    const errors = req.validationErrors();
    // if error show show the first one as they happen 
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to the next
    next();
};
exports.validateSignUp = (req, res, next) => {
    //name is not null and between 4-10 characters
    req.check("name", "Name is required").notEmpty();
    // email is not null, valid and normalized 
    req.check("email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Invalid email")
        .isLength({ 
            min: 4,
            max: 2000
        });
    // check for password 
    req.check("password", "password is required").notEmpty();
    req.check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    // check for errors
    const errors = req.validationErrors();
    // if errors show the first one as they happen 
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    //proceed to the next function 
    next();
}
exports.validateSocialLogin = (req, res, next) => {
    //name is not null and between 4-10 characters  
    req.check("name", "Name is required").notEmpty();
    // email is not null, valid and normalized 
    req.check("email", "Email must be between 30 to 32 characters ")
        .matches(/.+\@.+\..+/)
        .withMessage("Invalid email")
        .isLength({
            min: 4,
            max: 2000
        });
    req.check("userID", "userID is required.").notEmpty()
    req.check("socialPhoto", "Invalid photo url.")
    .notEmpty()
    .matches(/[(http(s)?):\/\(www\.)?a-zA-Z0-9@:%._\+~#]{2,6}\b([-a-zA-z0-9@:%_\+.~#?&//=]*)/)
    req.check("loginDomain")
}
