const Apt = require("../models/appointment")
const Doc = require("../models/doctor")

const CancelController = async (req, res) => {

    const doctorId=req.body.idD
    const doctor = await Doc.findById(doctorId);


    const appointment = doctor.appointment.find(appt => appt.time === req.body.time && appt.patientId !== "");
    if (appointment) {
        appointment.avb = true;
        appointment.patientId = "";
        Apt.findOneAndDelete({ idD: doctorId, idP:req.body.idP,time:req.body.time }, function(err, doc) {
            if (err) {
               res.json({status:"failure"})
                return
            } else if (!doc) {
                res.json({status:"failure"})
                return
            } else {
                res.json({status:"success"})
                return
            }
        });
    } else {
        res.json({status:"failure"})
        return
    }

   await doctor.save();

}

module.exports = CancelController