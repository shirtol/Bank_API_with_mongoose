import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.myglc6r.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL, (err, mongoDBInstance) => {
    if (err) throw Error("MongoDB connection Error: " + err);
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        const { host, port, name } = mongoDBInstance;
        console.log({ host, port, name });
    }
});
