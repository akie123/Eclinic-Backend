const Patient = require("../models/patient")

const PRController = async(req,res) => {

    console.log(req.body)
    const new_user = new Patient(req.body)
    new_user.save().then(()=>{
        res.status(201).json({
            status:"ok"
        })
    })
}

module.exports = PRController