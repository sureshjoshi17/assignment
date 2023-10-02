const dbConfig      = require('./dbConfig');
const expressConfig = require('./expressConfig');

const cfg = {
        projectName:process.env.PROJECT_NAME,
	environment: process.env.NODE_ENV,
        debug:process.env.DEBUG,
	port: process.env.PORT,
	TAG: process.env.TAG,

	mongo: {
            dbName: process.env.DB_NAME,
            dbHost: process.env.DB_URL,
            options: {
                // user: process.env.DB_USER,
		// pass: process.env.DB_PASS,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
	},
        
        basicAuth:{
            name:process.env.BASIC_AUTH_USERNAME,
            pass:process.env.BASIC_AUTH_PASS   
        },

        auth: {
                secret: process.env.JWT_SECRET,
                expiryTime: process.env.JWT_EXPIRY
        }
}

module.exports = {
	cfg,
	dbConfig,
	expressConfig
}