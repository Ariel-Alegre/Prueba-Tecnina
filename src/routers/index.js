const { Router } = require('express');
const router = Router();
const parientRouter = require('./patients_Router');
const hospitalRegisterRouter = require('./hospital_Router');
const doctorRegisterRouter = require('./doctor_Router');
const registerRouter = require('./registers_Router');




router.use("/auth/patient", parientRouter);
router.use("/auth/hospital", hospitalRegisterRouter);
router.use("/auth/doctor", doctorRegisterRouter);
router.use("/register", registerRouter);









module.exports = router