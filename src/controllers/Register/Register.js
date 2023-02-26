const { Hospital } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const createHttpError = require('http-errors')
const { ErrorObject } = require("../../helpers/error");
const { compare } = require("../../helpers/handleBcrypt");


module.exports = {
    Registers: async (req, res, next) => {
        const { email, password } = req.body;
        try {
          

        } catch (error) {
            console.log(
                `[Registers] - [Registers - GET]: ${error}`
            )
        }
    }
};

