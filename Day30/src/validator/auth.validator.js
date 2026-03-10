import {body , validationResult } from "express-validator";
function validate (res,req,next){
    const errs = validationResult(req)
    if(!errs){
        return next();
    }
    res.status(400).json({
        errors:errs.array()
    })
}
export const registerValidation = [
    body("username").isString().withMessage("username should be string"),
    body("email").isEmail().withMessage("email should be valid email address"),
    body("password").custom((value) => {
        if (value.length < 6) {
            throw new Error("password should be at least 6 characters long")
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/
        if (!passwordRegex.test(value)) {
            throw new Error("password should contain at least one uppercase letter and one number")
        }
        return true
    }).withMessage("password should be at least 6 characters long and contain at least one uppercase letter and one number"),
    validate
]