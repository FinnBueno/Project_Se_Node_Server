import Express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import _ from 'lodash';
import { DeceasedResolver } from './resolver/deceased';
import { FuneralResolver } from './resolver/funeral';
// import { connectToDB } from './config';
// import { connect } from 'mongoose';

// const { MONGOATLASUSERNAME, MONGOATLASPASSWORD } = process.env;
const port = 8000;

const main = async () => {
    const app = Express();

    const schema = await buildSchema({
        resolvers: [DeceasedResolver, FuneralResolver],
        emitSchemaFile: true,
        validate: false,
    });

    const server = new ApolloServer({ schema });

    // const mongoose = await connect(
    //     `mongodb+srv://${MONGOATLASUSERNAME}:${MONGOATLASPASSWORD}@funeralprojectse.yhwkt.mongodb.net/Project_Se_Funeral_Database?retryWrites=true&w=majority`,
    //     {
    //         useFindAndModify: false,
    //         bufferCommands: false,
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true,
    //     }
    // );
    // await mongoose.connection;

    // @ts-ignore
    server.applyMiddleware({ app });

    app.use(cors);

    app.listen({ port }, () => {
        console.log('Apollo Server on http://localhost:8000/graphql');
    });
}

main().catch((error)=>{
    console.log(error, 'error');
})