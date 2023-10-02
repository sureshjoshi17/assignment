const authRoutr = require("express").Router();
const resHndlr = require("../../../utils/responseHandler");
const constants = require('../../../utils/constant');
const authController = require("./authController");
const authValidator = require("./authValidator");
// const { error } = require("winston");

authRoutr.route("/signup")
    .post([authValidator.validateSignup], function (req, res) {
        const {name, email, password} = req.body;
        authController.signup({name, email, password})
        .then(function (result) {
            resHndlr.sendSuccess(res, result,req);
        })
        .catch(function (err) {
            resHndlr.sendError(res, err,req);
        })
    });
    
authRoutr.route("/login")
    .post([authValidator.validateLogin], function (req, res) {
        const {email, password} = req.body;
        authController.login({email, password})
        .then(function (result) {
            resHndlr.sendSuccess(res, result,req);
        })
        .catch(function (err) {
            resHndlr.sendError(res, err,req);
        })
    });
    

module.exports = authRoutr;
