const exception = require("../utils/exception");
const appUtils = require("../utils/appUtils");

const authenticateToken = async function (req, res, next) {
    try {
        if (!req.headers.authorization) {
            return next(exception.missingAuthHeaders());
        }

        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return next(exception.missingAuthToken()); 
        }

        //verify token
        let decode = await appUtils.verifyAuthToken(token);
        req.user = decode;
        next()
    } catch (error) {

        if (err.name === 'JsonWebTokenError') {
            return exception.unauthorizeAccess();
          } else if (err.name === 'TokenExpiredError') {
            return exception.tokenExpired();
          } else {
            return error;
        }
        next()
    }
    
};

var expireToken = function (req, res, next) {
    let acsToken = req.get('accessToken');
    return redisSession.expire(acsToken)
        .then(function (result) {
            //return result;
            next();
        })
        .catch(function (err) {
            next(err)
        })
}

var autntctTkn = function (req, res, next) {
    let acsToken = req.get('accessToken');

    __verifyTok(acsToken)
        .bind({})
        .then(function (tokenPayload) {
            //console.log('tokenPayload: ', tokenPayload);
            if (tokenPayload.d) {
                let userId=mongoose.Types.ObjectId(tokenPayload.d.userId)
                req.user = tokenPayload.d;
                req.user.userId=userId;
                next()
            } else {
               throw customException.sessionExpired();
                //res.render('reset_failure', {error_message: "Your token has been expired. Please try forgot password again."});
            }
        })
        .catch(function (err) {
            next(err)
        })
}

var authSocketTkn = function (socket, next) {

    var accessToken = socket.handshake.query.accessToken;
    next();
    __verifyTok(accessToken)
        .bind({})
        .then(function (tokenPayload) {
            if (tokenPayload.d) {
                let paylod = tokenPayload.d;
                socket.payload = tokenPayload.d;
                if (paylod.isAdmin == 0) {
                    return userService.getByKey({ _id: paylod.userId });
                } else {
                    return adminService.findByKey({ _id: paylod.userId });
                }
            } else {
                next()
               //throw customException.sessionExpired();
            }
        })
        .then(function (user) {
            socket.user = user;
            next()
        })
        .catch(function (err) {
            next(new Error('Authentication error'));
        })
}


//========================== Export Module Start ===========================

module.exports = {
    authenticateToken
};

//========================== Export Module End ===========================
