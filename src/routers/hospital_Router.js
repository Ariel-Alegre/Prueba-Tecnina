const { Router } = require('express');
const router = Router();
const { Register_Hospital } = require('../controllers/Autho_Hospital/Register_Hospital');
const { Login_Hospital } = require('../controllers/Autho_Hospital/Login_Hospital');
const {editHospital} = require('../controllers/Autho_Hospital/Edit_Hospital');




router.post("/register", Register_Hospital);
router.post("/login", Login_Hospital);
router.put("/:hospitalId", editHospital);





module.exports = router