// Importing mongoose
const mongoose = require("mongoose");
const constants = require('../../../utils/constant');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},{timestamp: true});

UserSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.updated;
    return obj;
};

//Export user module
module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);


