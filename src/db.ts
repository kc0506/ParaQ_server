import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';

const connect_db = () => {
    dotenv.config();
    const MONGO_URL = process.env.MONGO_URL as string;

    if (!MONGO_URL) {
        console.log("empty MONGO_URL!!");
        return;
    }

    mongoose.connect(
        MONGO_URL,
    ).then((res) => console.log("mongodb connection created"))
};

export { connect_db };