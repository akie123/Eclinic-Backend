const Doctor = require("../models/doctor")

const getSchedule = (req,res) => {
    const {id} = req.params
    Doctor.findById(id, { appointment : 1})
    .then(resp => {
        res.json({array : resp})
    })
}

module.exports = {getSchedule}