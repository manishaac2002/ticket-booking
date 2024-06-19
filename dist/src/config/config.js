import * as dotenv from "dotenv";
dotenv.config();
export const mongooseConfig = {
    URL: process.env.MONGO_URL,
};
