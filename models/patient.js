const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {

    }
)

module.exports = mongoose.model('patient',patientSchema)