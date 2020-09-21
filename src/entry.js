const createServer = require('./server');
const config = require('config');
const _ = require('lodash');

const server = createServer(config);

server.start();

const stop = _.once(server.stop);

['SIGTERM', 'SIGUSR1', 'SIGINT'].forEach((signal) => {
    process.once(signal, () => {
        console.log(`KILL: ${signal}`);
        stop();
    });
});