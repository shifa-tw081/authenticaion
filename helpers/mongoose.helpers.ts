import mongoose, { ConnectOptions } from "mongoose";

const options: ConnectOptions = {};
const mongooseObj = new mongoose.Mongoose();
// loadMongooseCache({ mongooseObj });
export const mongoconnection = mongooseObj.createConnection("local", options);
mongooseObj.set("debug", true);
