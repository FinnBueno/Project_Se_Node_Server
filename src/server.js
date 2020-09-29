const express = require('express');
const bodyParser = require('body-parser');
const restify = require('express-restify-mongoose');
const methodOverride = require('method-override');

const utils = require('./utils');
const deceasedSchema = require('../models/Funeral');
const { ApolloServer, gql } = require('apollo-server-express');

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

        const Deceased = deceasedSchema(db);
        const model = { Deceased };

        const apolloServer = new ApolloServer({
            typeDefs: gql`
                type Query {
                    hello: String
                }
            `,
            resolvers: {
                Query: {
                    hello: () => 'Hello world!',
                },
            },
        });

        restify.serve(router, Deceased);

        apolloServer.applyMiddleware({ app });

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
