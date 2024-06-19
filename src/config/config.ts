import * as dotenv from "dotenv"

dotenv.config()

export const mongooseConfig: { URL: any } = {
  URL: process.env.MONGO_URL,
}