const { doctor, Register } = require('../../database/models');
const { compare } = require("../../helpers/handleBcrypt");


module.exports = {
    LoginDoctor: async (req, res, next) => {
        const { identify, password } = req.body;
        try {
            const userDoctor = await doctor.findOne({
                where: {
                    identify: identify
                }
            })

            if (!userDoctor) {
                res.status(404).send({ error: 'User not found' })
            }

            const checkPassword = await compare(password, userDoctor.password)
            if (checkPassword) {

                const doctorRegister = await doctor.findAll({
                    include: [
                        {
                            model: Register
                        }
                    ]
                })
                res.status(200).send(doctorRegister)

            } else {
                res.status(409).json({ Error: 'Invalid password' })
            }

        } catch (error) {
            res.send(
                `[Login Users Doctor] - [Login_Doctor - POST]: ${error}`
            )
        }
    }
};

