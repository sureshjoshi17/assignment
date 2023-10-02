console.log("");
console.log("//************************* Nodejs App 1.0.0 **************************//");
console.log("Server Start Date : ",new Date());

//.env file read
require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const config = require('./config');
const app = express();
const logger = require('./logger');

config.dbConfig(config.cfg, (error) => {
    if (error) {
        logger.error(error, 'Exiting the app.');
        return;
    }
    // config express
    config.expressConfig(app, config.cfg.environment);
    logger.info('env : '+ config.cfg.environment);

    // attach the routes to the app
    require('./route')(app);

    // start server
    app.listen(config.cfg.port, () => {
        logger.info(`Express server listening on port ${config.cfg.port}, in ${config.cfg.TAG} mode`);
    });
});