const { Router } = require('express');
const router = Router();
const { Register_Doctor } = require('../controllers/Autho_Doctor/Register_Doctor');
const { Login_Doctor } = require('../controllers/Autho_Doctor/Login_Doctor');
const { editDoctor } = require('../controllers/Autho_Doctor/Edit_Doctor');





router.post("/register", Register_Doctor);
router.post("/login", Login_Doctor);
router.post("/:doctorId", editDoctor);









module.exports = router