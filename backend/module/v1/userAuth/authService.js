const BaseDao = require('../../../dao/baseDao');
const User = require('./userModel');

const UserModel = new BaseDao(User);

function findUserByKey(queryObj){
    return UserModel.findOne(queryObj);
}

function signup({name, email, password}){
    console.log(name, email, password)
    return UserModel.save({name, email, password});
}

module.exports = {
    findUserByKey,
    signup, 
};

//========================== Export Module End ===============================
