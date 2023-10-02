const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config')

const generateSaltAndHashForPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    const encryptPassword = bcrypt.hashSync(password, salt);
    return encryptPassword;
}

const comparePassword = function (passoword, passowordHash) {
    return bcrypt.compareSync(passoword, passowordHash);
}

const generateAuthToken = function (user){
    let payload = {
        userId: user._id,
        email: user.email
    }

    return jwt.sign(payload, config.cfg.auth.secret, {expiresIn: config.cfg.auth.expiryTime});
}

const verifyAuthToken = async function (token){
    jwt.verify(token, config.cfg.auth.secret, (err, decode) => {
        if(err) throw err;

        return decode;
        
    });
}

module.exports = {
    generateSaltAndHashForPassword,
    comparePassword,
    generateAuthToken,
    verifyAuthToken
};

