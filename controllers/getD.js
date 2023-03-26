const Doctor = require("../models/doctor")

const getSchedule = (req,res) => {
    const {id} = req.params
    Doctor.findById(id, { appointment : 1})
    .then(resp => {
        res.json({array : resp})
    })
}

const updateSchedule = async(req,res) => {
    const {id} = req.params
    let tt= await Doctor.findById(id)
    console.log(req.body)
    tt.appointment=req.body

    Doctor.findByIdAndUpdate(id,tt)
    .then(resp => {
        res.sendStatus(200)
    })
}

module.exports = {getSchedule,updateSchedule}