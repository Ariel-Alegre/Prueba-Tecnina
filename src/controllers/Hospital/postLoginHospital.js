const { Hospital, doctor, Register } = require('../../database/models');
const { compare } = require("../../helpers/handleBcrypt");


module.exports = {
    LoginHospital: async (req, res, next) => {
        const { identify, password } = req.body;
        try {
            const userHospital = await Hospital.findOne({
                where: {
                    identify: identify
                }
            })

            if (!userHospital) {
                res.status(404).send({ error: 'User not found' })
            }

            const checkPassword = await compare(password, userHospital.password)

            if (checkPassword) {
                const hospital = await Hospital.findAll({
                    include: [
                        {
                            model: doctor
                        },
                        {
                            model: Register
                        }
                    ]
                })
                res.status(200).json(hospital)
            } else {
                res.status(409).json({ Error: 'Invalid password' })
            }

        } catch (error) {
            console.log(
                `[Login Users Hospital] - [Login_Hospital - POST]: ${error}`
            )
        }
    }
};

