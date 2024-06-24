import { mongooseConfig } from "config/config.ts";
import mongoose from "mongoose"


export const connectToMongoose = async (connection: boolean): Promise<void> => {
  try {
    if (connection) {
      await mongoose.connect(mongooseConfig.URL)
      console.log("🟢 Connected to database!");
    } else {
      console.log("🟡 Working with no database!");
    }
  } catch (error) {
    console.error(error);
    console.log("Connection failed!");
  }
};
