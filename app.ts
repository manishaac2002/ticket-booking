import express, { Request, Response } from 'express'
import { connectToMongoose } from 'mongoose/configs.ts'
import controllers from "./src/controllers/controllers.ts"

// Create Express server
const app = express()

// Define a route handler
app.get('/get-user',controllers.getUsers)

// Start the Express server
const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
    await connectToMongoose(true)
    console.log(`Server is running on http://localhost:${PORT}`)
})
