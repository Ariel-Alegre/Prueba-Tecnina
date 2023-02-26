const { Router } = require('express');
const router = Router();
const { RegisterPatient } = require('../controllers/Patients/postRegistersPatients');
const { LoginPatient } = require('../controllers/Patients/postLoginPatients');
const { editPatientPassword } = require('../controllers/Patients/putPatientsPassword');


router.post('/register', RegisterPatient)
router.post('/login', LoginPatient)
router.put('/:id', editPatientPassword)







module.exports = router;