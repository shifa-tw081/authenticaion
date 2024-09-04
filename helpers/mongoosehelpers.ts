import debug from "debug";
import mongoose, { ConnectOptions, mongo } from "mongoose";
const options: ConnectOptions = {};
const mongooseObj = new mongoose.Mongoose();
mongooseObj.set("debug", true);
const uri = "mongodb://0.0.0.0:27017/db";
export const dbConnection = mongooseObj.createConnection(
  uri as string,
  options
);
dbConnection.on("open", () => console.log("connected to mongo"));
dbConnection.on("error", (e) => console.log(`Primary database error. ${e}`));
