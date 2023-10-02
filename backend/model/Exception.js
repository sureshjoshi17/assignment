/* 
 Exception class 
*/
class Exception {
	constructor(errorCode, message, errorStackTrace, userType){
		this.errorCode = errorCode;
		this.responseMessage = message;
		// this.errorMessage = message;
		if(userType)
			this.userType = userType; 
		if(errorStackTrace){
			this.errors = errorStackTrace;
		}
	}
}

module.exports = Exception;