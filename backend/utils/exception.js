const Exception = require("../model/Exception");
const constants = require("./constant");


module.exports = {
    intrnlSrvrErr: function (err) {
        return new Exception(500, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    validationError: function (err) {
        return new Exception(400, constants.MESSAGES.VALIDATION_ERROR, err);
    },
    unauthorizeAccess: function (err) {
        return new Exception(401, constants.MESSAGES.UNAUTHORIZED_ACCESS, err)
    },
    missingAuthHeaders: function (err) {
        return new Exception(401, constants.MESSAGES.MISSING_AUTH_HEADERS, err)
    },
    missingAuthToken: function (err) {
        return new Exception(401, constants.MESSAGES.MISSING_AUTH_TOKEN, err)
    },
    tokenExpired: function (err) {
        return new Exception(401, constants.MESSAGES.TOKEN_EXPIRED, err)
    },
    alreadyRegistered: function (err) {
        return new Exception(409, constants.MESSAGES.ALREADY_REGISTERED, err)
    },

    notRegistered: function () {
        return new Exception(404, constants.MESSAGES.INVALID_EMAIL)
    },

    invalidCredential: function () {
        return new Exception(401, constants.MESSAGES.INVALID_CREDENTIAL)
    }
};

//========================== Export Module   End ===========================
