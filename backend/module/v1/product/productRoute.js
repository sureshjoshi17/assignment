const productRoutr = require("express").Router();
const resHndlr = require("../../../utils/responseHandler");
const constants = require('../../../utils/constant');
const productController = require("./productController");
const {authenticateToken} = require('../../../middleware/authenticate')

productRoutr.route('/')
    .get([authenticateToken], function (req, res) {
        productController.getProducts(req.query)
        .then(function (result) {
            resHndlr.sendSuccess(res, result,req);
        })
        .catch(function (err) {
            resHndlr.sendError(res, err,req);
        })
    })

module.exports = productRoutr;