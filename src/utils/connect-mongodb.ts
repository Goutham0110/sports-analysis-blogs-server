import mongoose from "mongoose";
import configs from "../config/configs";

export default async function initDatabase() {
    try {
        const db = mongoose.connection;
        db.on('connected', () => console.log('Connected to MongoDB'));
        db.on('reconnected', () => console.log('Reconnecting to MongoDB'));
        db.on('disconnected', () => console.log('Disconnected from MongoDB'));
        mongoose.connect(configs.MONGODB_CONNECTION_URL);
        return db;
    } catch (err) {
        console.log("Failed to connect to Database");
        console.log(err);
    }

};