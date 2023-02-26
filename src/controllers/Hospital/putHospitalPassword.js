const { Hospital } = require('../../database/models');
const { encrypt } = require("../../helpers/handleBcrypt")

module.exports = {
    editHospitalPasssword: async (req, res, next) => {
        const { hospitalId } = req.params
        const { password } = req.body

        try {
            const oneHospital = await Hospital.findByPk(hospitalId)

            if (!oneHospital) {
                res.status(404).json({ message: "El usuario no se encuentra" })
            } else {
                const passwordHash = await encrypt(password)
                const HospitalUpdate = await oneHospital.update({
                    password: passwordHash
                })

                if (HospitalUpdate) {
                    res.status(200).json(HospitalUpdate)
                }
            }
        } catch (error) {
            res.send(`[Error Update Hospital] - [hospital - PUT]: ${error}`)
        }
    }
};