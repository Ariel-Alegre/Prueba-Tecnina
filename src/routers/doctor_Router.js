const { Router } = require('express');
const router = Router();
const { RegisterDoctor } = require('../controllers/Doctor/postRegisterDoctor');
const { LoginDoctor } = require('../controllers/Doctor/postLoginDoctor');
const { DoctorPassword } = require('../controllers//Doctor/putDoctorPassword');





router.post("/register", RegisterDoctor);
router.post("/login", LoginDoctor);
router.put("/:doctorId", DoctorPassword);









module.exports = router