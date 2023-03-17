const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
    {

    }
);

module.exports = mongoose.model("doctor", doctorSchema);