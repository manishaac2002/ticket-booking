var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mongooseConfig } from "config/config.ts";
import mongoose from "mongoose";
/**
 * Asynchronously connects to the Mongoose database based on the provided usage flag.
 *
 * @param {boolean} usage - A flag indicating whether to connect to the database.
 * @return {Promise<void>} A promise that resolves once the connection process is completed.
 */
export const connectToMongoose = (connection) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (connection) {
            yield mongoose.connect(mongooseConfig.URL); // Add await for proper handling of the asynchronous connect method
            console.log("🟢 Connected to database!");
        }
        else {
            console.log("🟡 Working with no database!");
        }
    }
    catch (error) {
        console.error(error);
        console.log("Connection failed!");
    }
});
