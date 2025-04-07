import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO as string;

export const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    mongoose.Promise = global.Promise //ensures that Mongoose uses JavaScript’s built-in Promise implementation instead.;
    console.log("Connect to mongo");
  } catch (error) {
    throw error;
  }
};
