const { Patient, Register, doctor } = require('../../database/models');
const { compare } = require("../../helpers/handleBcrypt");


module.exports = {
    LoginPatient: async (req, res, next) => {
        const { identify, password } = req.body;
     
        try {
            const userPatient = await Patient.findOne({
                where: {
                    identify: identify
                }
            })

            if (!userPatient) {
                res.status(404).send({ error: 'User not found' })
            }
            const checkPassword = await compare(password, userPatient.password)
          
            if (checkPassword) {
                const patientRegister = await Patient.findAll({
                    include:[
                        {
                            model: Register
                        },
                        {
                            model:doctor
                        }
                    ]
                })
               res.status(200).send(patientRegister)
            } else {
           
                res.status(409).json({ Error: 'Invalid password' })
            }
    

        } catch (error) {
             res.send(
                `[Login User Patients] - [Login_patients - POST]: ${error}`
                )
        }
    }
};