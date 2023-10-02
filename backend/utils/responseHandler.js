const constant = require('./constant');
const customException = require('./exception');
const logger = require('../logger');
const APIResponse = require('../model/APIResponse');
    
function _sendResponse(response, result) {
    // send status code 200
    return response.status(200).send(result);
}

function sendError(response, error,request) {
    // if error doesn't has sc than it is an unhandled error,
    // log error, and throw intrnl server error
    if (!error.errorCode) {
        logger.error(error, "Unhandled error.");
        error = customException.intrnlSrvrErr(error);
    }
    const result = new APIResponse(constant.STATUS_CODE.ERROR, error,request);
    _sendResponse(response, result);
}

function handleError(error, request, response, next) {
    // unhandled error
    sendError(response, error,request);
}

function sendSuccess(response, result,request) {
    var result = new APIResponse(constant.STATUS_CODE.SUCCESS, result,request);
    _sendResponse(response, result);
}


module.exports = {
    sendError,
    handleError,
    sendSuccess,
}