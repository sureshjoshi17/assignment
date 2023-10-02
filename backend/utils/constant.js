const STATUS_CODE = {
	ERROR: 0,
	SUCCESS: 1
}

const DB_MODEL_REF = {
	USER        : "User"
}

const MESSAGES = {
    KEY_CANT_EMPTY          : "{{key}} cannot be empty",
	ALREADY_REGISTERED		: "User email already registered",
	INTERNAL_SERVER_ERROR   : "Please try after some time.",
	INVALID_EMAIL           : "Please fill valid email address.",
	INVALID_CREDENTIAL		: "Invalid email or password",
	INVALID_PASSWORD        : "Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.",
	VALIDATION_ERROR        : "Validation error.",
	UNAUTHORIZED_ACCESS     : "Unauthorized access.",
	MISSING_AUTH_HEADERS	: "Missing authorization headers",
	MISSING_AUTH_TOKEN		: "Missing authentication token",
	TOKEN_EXPIRED			: "Token has experied",
	SESSION_EXPIRED         : "Your session has expired due to login in another device.",
    INCORRECT_PASS          : "Invalid email or passoword",
}

module.exports = Object.freeze({
	STATUS_CODE         : STATUS_CODE,
	DB_MODEL_REF        : DB_MODEL_REF,
	MESSAGES            : MESSAGES,
});