const { Hospital, Register, doctor } = require('../../database/models');
const { encrypt } = require("../../helpers/handleBcrypt");


module.exports = {
  RegisterHospital: async (req, res, next) => {
    const { name, address, medical_services, email, phone, identify, password } = req.body
    try {
      if (!name || !address || !medical_services || !email || !phone || !identify || !password) {
        return res.status(404).send({message: "Completar los datos de registro"})
      }
      const checkInfo = await Hospital.findAll();
      const checkEmail = checkInfo.some(data => data.email === email)
      const checkDni = checkInfo.some(data => data.identify === identify)

      if (checkEmail || checkDni) {
         res.status(404).send({ message: "El usuario ya se encuentra registrado" })

      }

      const hashPassword = await encrypt(password)
      const hospitalRegister = await Hospital.create({
        name,
        address,
        medical_services,
        email,
        phone,
        identify,
        password: hashPassword
      })

      if (hospitalRegister) {
       
         res.status(200).send(hospitalRegister)
      }
    } catch (error) {
      res.send(
        `[Register Users Hospital] - [Register_Hospital - POST]: ${error}`
      )
    }

  }
}