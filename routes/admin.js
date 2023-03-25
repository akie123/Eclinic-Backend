const {Router} = require('express')
const router = Router()
const { checkValidToken, checkValidUser } = require("../utils/jwt");
router.use(checkValidToken); // Jwt Middleware
router.use("/:id", checkValidUser);

module.exports = router