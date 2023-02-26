const { Router } = require('express');
const router = Router();
const { patients } = require('../controllers/Patients/Registers_Patients');
const { Login_patients } = require('../controllers/Patients/Login_Patients');
const { editPatient } = require('../controllers/Patients/Edit_Patients');


router.post('/register', patients)
router.post('/login', Login_patients)
router.put('/:id', editPatient)







module.exports = router;