const Doctor = require("../models/doctor")

const getSchedule = (req,res) => {
    const {id} = req.params
    Doctor.findById(id, { appointment : 1})
    .then(resp => {
        res.json({array : resp})
    })
}

const updateSchedule = (req,res) => {
    const {id} = req.params
    Doctor.findByIdAndUpdate(id,req.body)
    .then(resp => {
        res.sendStatus(200)
    })
}

module.exports = {getSchedule,updateSchedule}