const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require("dotenv").config();

// Routers
const PatientRouter = require("./routes/patient")
const DoctorRouter = require("./routes/doctor")
const AdminRouter = require("./routes/admin")
const LoginRouter = require("./routes/login")
const RegisterRouter = require("./routes/register")

// constanst
const { MONGO_URI,PORT } = require('./constants')

// Middlewares
app.use(express.json())
app.use(cors())

// Connection to Database
mongoose.set("strictQuery", true);
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT,() => {
        console.log(`Server Running on PORT ${PORT}`)
    })
})


// Routes
app.use("/login",LoginRouter)
app.use("/register",RegisterRouter)
app.use("/patient",PatientRouter)
app.use("/doctor",DoctorRouter)
app.use("/admin",AdminRouter)
