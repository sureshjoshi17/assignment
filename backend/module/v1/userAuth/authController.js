const authService    = require('./authService');
const authMapper    = require('./authMapper');

const appUtils      = require('../../../utils/appUtils');
const exceptions    = require("../../../utils/exception");


function signup({name, email, password}) {
    console.log('hello..........')
    // check if user alerady exist
    return authService.findUserByKey({email})
        .then(function (user) {
            this.user = user
            if (this.user) {
                throw exceptions.alreadyRegistered();
            } 

            // hash password using bcrypt
            let passowordHash = appUtils.generateSaltAndHashForPassword(password);
            // console.log()
            return authService.signup({name, email, password:passowordHash})
        })
        .then(function (user) {
            return authMapper.signupMapping(user);
        })
        .catch(error => {
            throw error;
        })
   
}

function login({email, password}) {
    return authService.findUserByKey({email})
        .then(function (user) {
            this.user = user
            if (!this.user) {
                throw exceptions.notRegistered();
            } 

            // hash password using bcrypt
            let isMatched = appUtils.comparePassword(password, this.user.password);

            if(!isMatched){
                throw exceptions.invalidCredential();
            }

            // Generate auth token using JWT
            let token = appUtils.generateAuthToken(this.user);

            return authMapper.loginMapping(this.user, token)
        })
        .catch(error => {
            throw error;
        })
}


module.exports = {
    signup,
    login,
};
