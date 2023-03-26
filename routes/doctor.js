const { Router } = require("express");
const router = Router();
const { checkValidToken, checkValidUser } = require("../utils/jwt");
const { UpdateDp, Update } = require("../controllers/update");
const {getInfo} = require("../controllers/getinfo")
const {getSchedule,updateSchedule} = require("../controllers/getD")

router.use(checkValidToken); // Jwt Middleware

router.use("/:id", checkValidUser);

router.post("/:id/updatedp", UpdateDp);

// Info update
router.post("/:id/update",Update);

// Get info
router.get("/:id/getinfo",getInfo)

// Schedule Manager
router.get("/:id/getschedule",getSchedule)

// Update Schedule Manager
router.post("/:id/updateschedule",updateSchedule)

module.exports = router;