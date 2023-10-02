/**
 * This file will have request and response object mappings.
 */

function signupMapping(params) {
    let respObj = {
        "statusCode": 201,
        "message": "Signup success"
    }
    return respObj;
}

function loginMapping(result, token) {
    let respObj = {
        "message": "Login success",
        "token": token,
        "data": {
            "_id": result._id,
            "name": result.name,
            "email": result.email,
        }
    }
    return respObj;
}


module.exports = {
    signupMapping,
    loginMapping,
}