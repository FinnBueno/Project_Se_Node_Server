const _ = require('lodash');
const config = require('config');

const getDbConnection = () =>
    new Promise((resolve) => {
        const mongoose = require('mongoose');
        const dbUrl = config.db.connection.uri;

        const db = mongoose.createConnection(dbUrl, config.db.opts);

        db.once('open', () => {
            console.log('Database Connected');
            resolve(db);
        });
    });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

module.exports = {
    getDbConnection,
    sleep,
};
