const Queries = require("../models/queries")

const ContactusController = async(req,res) => {
    Queries(req.body).save().then(() => {
        res.sendStatus(201)
    })
}

module.exports = ContactusController