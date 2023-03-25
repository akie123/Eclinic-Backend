const Doctor = require("../models/doctor")
const Patient = require("../models/patient")

const UpdateDp = (req,res) => {
    let User
    if(req.body.user.user === "doctor")
        User = Doctor
    else
        User = Patient
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body)
      .then(() => {
        res.status(200).send({
          msg: "Profile Pic Updated",
        });
      })

      .catch((err) => {
        res.send({
          err: "Unable to Upload Image",
        });
      });
}

module.exports = UpdateDp