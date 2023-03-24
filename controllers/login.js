const Doctor = require("../models/doctor")
const Patient = require("../models/patient")
const comparePassword = require("../utils/bcrypt")
const generateToken = require("../utils/jwt")

const LoginController = async (req,res) => {
    const user = await Doctor.findOne({number : req.body.number},{password : 1})
    if(user !== null){
        if(comparePassword(req.body.password,user.password)){
            user.user = "doctor",
            user.phone = req.body.phone
            user.jwtToken = generateToken(user)
            res.status(200).send()
        }
    }
    else{
        user = await Patient.findOne({number: req.body.number},{password : 1})
        
    } 
}

module.exports = {LoginController}