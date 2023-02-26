const { doctor, Register } = require('../../database/models');
const { encrypt } = require("../../helpers/handleBcrypt");


module.exports = {
  RegisterDoctor: async (req, res, next) => {
    const { name, address, email, phone, identify, password } = req.body

    try {
      if (!name || !address || !email || !phone || !identify || !password) {
        res.status(404).json({ message: "No completaste los datos, porfavor complete los datos" })
      }

      const checkInfo = await doctor.findAll();
      const checkEmail = checkInfo.find(data => data.email === email)
      const checkDni = checkInfo.find(data => data.identify === identify)


      if (checkEmail || checkDni) {
        return res.status(404).send({ msg: "El usuario ya esta registrado" });
      }

      const hashPassword = await encrypt(password)
      const hospitalRegister = await doctor.create({
        name,
        address,
        email,
        phone,
        identify,
        password: hashPassword
      })

      res.status(200).send(hospitalRegister)
    } catch (error) {
      return res.send(
        `[Register Users Doctor] - [Register_Doctor - POST]: ${error}`
      )
    }

  }
}