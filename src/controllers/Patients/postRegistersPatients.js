const { Model } = require('sequelize');
const { Patient, Register, doctor } = require('../../database/models');
const { encrypt } = require("../../helpers/handleBcrypt")

module.exports = {
    RegisterPatient: async (req, res, next) => {
        const { name, address, birthdate, email, phone, identify, password } = req.body

        try {
            if (!name || !address || !birthdate || !email || !phone || !identify || !password) {
                res.status(404).json({ message: "No completaste los datos, porfavor complete los datos" })
            }
            const checkInfo = await Patient.findAll();
            const checkPassword = checkInfo.find(data => data.email === email)
            const checkDni = checkInfo.find(data => data.identify === identify)

            if (checkPassword || checkDni) {
                return res.status(404).send({ msg: "El usuario ya esta registrado" });
            }
            const passwordHash = await encrypt(password)
            const patient = await Patient.create({
                name,
                address,
                birthdate,
                email,
                phone,
                identify,
                password: passwordHash
            })
          
            res.status(200).json(patient)
        } catch (error) {
            res.send(`[Error User patients registers] - [patients - POST]: ${error}`)
        }

    }
};