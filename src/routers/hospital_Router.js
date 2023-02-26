const { Router } = require('express');
const router = Router();
const { RegisterHospital } = require('../controllers/Hospital/postHospitalRegister');
const { LoginHospital } = require('../controllers/Hospital/postLoginHospital');
const {editHospitalPasssword} = require('../controllers/Hospital/putHospitalPassword');


router.post("/register", RegisterHospital);
router.post("/login", LoginHospital);
router.put("/:hospitalId", editHospitalPasssword);


module.exports = router