const { Router } = require("express");
const DoctorController = require("../controllers/doctorS");
const PatientController = require("../controllers/patientS");
const router = Router();
router.post("/signP",PatientController)
router.post("/signD",DoctorController)

module.exports = router;