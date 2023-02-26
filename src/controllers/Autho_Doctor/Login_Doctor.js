const { doctor } = require('../../database/models');
const { compare } = require("../../helpers/handleBcrypt");


module.exports = {
    Login_Doctor: async (req, res, next) => {
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
                res.status(200).send(userDoctor)

            } else {
                res.status(409).json({ Error: 'Invalid password' })
            }

        } catch (error) {
            console.log(
                `[Login Users Doctor] - [Login_Doctor - POST]: ${error}`
            )
        }
    }
};

