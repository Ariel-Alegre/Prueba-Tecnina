const bycrypt = require('bcryptjs');

const encrypt = async (textPlain) => {
    const hash = await bycrypt.hash(textPlain, 10);
    return hash
};

const compare = async (passwordPlain, hashPassword) => {
    return await bycrypt.compare(passwordPlain, hashPassword);
};


module.exports = {
    encrypt,
    compare
}