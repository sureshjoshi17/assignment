const mongoose = require('mongoose');
const logger = require("../logger");

// Connect to Db
function connectDb(env, callback) {
    let dbName = env.mongo.dbName;
    let dbHost = env.mongo.dbHost;
    let dbUrl =  `${dbHost}/${dbName}`

    logger.info("Connecting to -> " + dbUrl);

    mongoose.connect(dbUrl);
    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        logger.info('Connected to DB', dbName, 'at', ``);
        callback();
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (error) {
        logger.info('DB connection error: ' + error);
        callback(error);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        logger.info('DB connection disconnected.');
        callback("DB connection disconnected.");
    });
}

module.exports = connectDb;