const express = require('express');
const bodyParser = require('body-parser');
const restify = require('express-restify-mongoose');
const methodOverride = require('method-override');

const utils = require('./utils');
const apolloServer = require('../apollo/apollo-server')
const deceasedSchema = require('../models/Funeral');

module.exports = (config) => {
    let server;
    let db = null;

    const start = async () => {
        const app = express();
        const router = express.Router();

        app.use(bodyParser.json());
        app.use(methodOverride());
        app.use(bodyParser.urlencoded({ extended: true }));

        db = await utils.getDbConnection();
        // apollo server still twisted about naming with this.
        const apolloNode = await apolloServer(db)

        const Deceased = deceasedSchema(db);
        const model = { Deceased };

        restify.serve(router, Deceased);

        apolloNode.applyMiddleware({ app });

        app.use(router);
        app.use('/api/v1', require('../api/v1')({ model }));

        server = await new Promise((resolve, reject) => {
            const server = app.listen(config.server.port, (error) => {
                if (error) return reject(error);
                console.log(`Server running on ${config.server.port}`);
                resolve(server);
            });
        });
        return {
            db,
            model,
        };
    };

    const stop = async () => {
        console.log('Stopping server');
        server.close();
        await db.close();
        await utils.sleep(100);
    };

    return { start, stop };
};
