const Doc = require("../models/doctor")

const DRController = async(req,res) => {
    req.body['verified'] = false
    const new_user = new Doc(req.body)
    new_user.save().then(()=>{
        res.status(201).json({
            status:"ok"
        })
    })
}

module.exports = DRController