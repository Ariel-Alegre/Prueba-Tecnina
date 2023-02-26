const { Router } = require('express');
const router = Router();
const { Registers } = require('../controllers/Register/Register');


router.post('/', Registers)



module.exports = router;