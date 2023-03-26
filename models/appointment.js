const mongoose = require("mongoose");


const apSchema = mongoose.Schema({
    idD: {
        type: String,
        required: true
    },
    idP: {
        type: String,
        require: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    time: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("appointment", apSchema);