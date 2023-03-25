const { Router } = require("express");
const router = Router();
const { checkValidToken, checkValidUser } = require("../utils/jwt");
const UpdateDp = require("../controllers/updatedp")

router.use(checkValidToken); // Jwt Middleware
df
router.use("/:id", checkValidUser);  

router.post("/:id/updatedp",UpdateDp);

module.exports = router;