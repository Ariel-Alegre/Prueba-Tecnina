const { Hospital } = require('../../database/models');
const { compare } = require("../../helpers/handleBcrypt");


module.exports = {
    Login_Hospital: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const userHospital = await Hospital.findOne({
                where: {
                    email: email
                }
            })

            
            if (!userHospital) {
                res.status(404).send({ error: 'User not found' })
            }
        
           const checkPassword = await compare(password, userHospital.password)
            
            if (checkPassword) {
                res.status(200).json(userHospital)
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

