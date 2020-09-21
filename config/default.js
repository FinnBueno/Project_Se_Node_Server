const { MONGOATLASUSERNAME, MONGOATLASPASSWORD } = process.env;

const env = 'development';

module.exports = {
    env,

    server: {
        port: 4000,
    },

    db: {
        connection: {
            uri: `mongodb+srv://${MONGOATLASUSERNAME}:${MONGOATLASPASSWORD}@funeralprojectse.yhwkt.mongodb.net/Project_Se_Funeral_Database?retryWrites=true&w=majority`,
        },
        opts: {
            useFindAndModify: false,
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
    },
};
