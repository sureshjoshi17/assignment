const bodyParser = require('body-parser');// parses information from POST
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../apiDocs/swagger.json');

module.exports = function(app){
	// parses application/json bodies
	app.use(bodyParser.json());
	// parses application/x-www-form-urlencoded bodies
	// use queryString lib to parse urlencoded bodies
	app.use(bodyParser.urlencoded({extended:false}));
    app.use(cors());
    app.use(helmet());
	/**
	 * add swagger to our project
	 */
	// app.use('/apiDocs/v1',whitelist.whitelistIP, express.static(app.locals.rootDir + '/public/apiDocsV1'));
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        
	app.use(function(request, response, next){
        response.header("Access-Control-Allow-Origin", "*");
        response.header('Access-Control-Allow-Credentials', true);
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken");
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        next();
	});
}