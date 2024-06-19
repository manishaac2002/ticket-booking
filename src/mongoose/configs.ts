import { mongooseConfig } from "config/config.ts";
import mongoose from "mongoose"


/**
 * Asynchronously connects to the Mongoose database based on the provided usage flag.
 *
 * @param {boolean} usage - A flag indicating whether to connect to the database.
 * @return {Promise<void>} A promise that resolves once the connection process is completed.
 */
export const connectToMongoose = async (connection: boolean): Promise<void> => {
  try {
    if (connection) {
      await mongoose.connect(mongooseConfig.URL); // Add await for proper handling of the asynchronous connect method
      console.log("🟢 Connected to database!");
    } else {
      console.log("🟡 Working with no database!");
    }
  } catch (error) {
    console.error(error);
    console.log("Connection failed!");
  }
};
