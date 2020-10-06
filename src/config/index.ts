import { connect } from "mongoose";

const { MONGOATLASUSERNAME, MONGOATLASPASSWORD } = process.env;

export const connectToDB = async () => {
    return await connect(
        `mongodb+srv://${MONGOATLASUSERNAME}:${MONGOATLASPASSWORD}@funeralprojectse.yhwkt.mongodb.net/Project_Se_Funeral_Database?retryWrites=true&w=majority`,
        {
            useFindAndModify: false,
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
};

