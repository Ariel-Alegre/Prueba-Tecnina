const { Register } = require('../../database/models');



module.exports = {
    Registers: async (req, res, next) => {
        const { patientId, observations, health_condition } = req.body

        try {
            const registers = await Register.create({
                patientId,
                observations,
                health_condition
            })

            res.send(registers)

        } catch (error) {
            res.send(
                `[Registers] - [Registers - GET]: ${error}`
            )
        }
    }
};

