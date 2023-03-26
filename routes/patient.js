const { Router } = require("express");
const router = Router();
const { checkValidToken, checkValidUser } = require("../utils/jwt");
const {UpdateDp,Update} = require("../controllers/update");
const { getInfo } = require("../controllers/getinfo");

// Jwt Middleware
router.use(checkValidToken);
router.use("/:id", checkValidUser);

// DP update
router.post("/:id/updatedp", UpdateDp);

// Info update
router.post("/:id/update",Update);

// Get Info
router.get("/:id/getinfo", getInfo);

module.exports = router;
