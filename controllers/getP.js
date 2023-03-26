const Patient = require("../models/patient")
const Doctor  = require("../models/doctor")

const getDoctors = (req,res) => {
    Doctor.find({},{
        name: 1,
        spec: 1,
        fees: 1,
        appointment: 1
    })
        .then(resp => {
            res.send(resp)
        })
}



module.exports = {getDoctors}