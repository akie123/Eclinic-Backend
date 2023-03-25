const Doc = require("../models/doctor")
const { hashPassword } = require("../utils/bcrypt")

const DRController = async (req, res) => {
    req.body['verified'] = false
    req.body.password = hashPassword(req.body.password)
    const new_user = new Doc(req.body)
    new_user.save()
    .then(() => {
        res.status(201).json({
            status: "ok",
        });
    })
    .catch(() => {
        res.sendStatus(400);
    });
}

module.exports = DRController